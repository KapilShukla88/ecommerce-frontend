import { createRequest } from "@utils/request-object";
import { toast } from "react-toastify";
import AxiosService from "./axios-service";
import { getLocalStorage, localStorageServiceGet } from "./localStorageService";
import stringUtils from "@utils/string-utils";

type IMessageConfig = {
  pending?: string;
  success?: string;
  error?: string;
  default?: boolean;
};

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
  DEFAULT = "get",
}

interface HttpRequestBody {
  [key: string]: any;
}

const parseSameErrorParam = (errors: Array<any>) => {
  const param = errors[0].param;
  let response = `Validation error for param : ${param}, errors are : \n`;
  errors.forEach((error) => {
    response += error.msg + "\n";
  });
  return response;
};

const parseHttpError = (error: any) => {
  if (error?.response?.data?.errors) {
    return parseSameErrorParam(error?.response?.data?.errors);
  }
  if (error?.response?.data?.message) return error.response.data.message;
  return "Server error, Please try again!";
};

async function HttpService<T>(
  url: string,
  method: HttpMethod,
  data: HttpRequestBody,
  auth: boolean,
  messageConfig?: IMessageConfig,
  overiddeBaseURL?: string
): Promise<T> {
  const request = createRequest(
    overiddeBaseURL || url || "ADD_URL_HERE",
    method,
    data,
    auth ? (getLocalStorage("token") as any) : null,
    auth
  );

  try {
    if (
      !messageConfig?.default &&
      !messageConfig?.success &&
      !messageConfig?.pending &&
      !messageConfig?.error
    ) {
      const response = await AxiosService.request(request);
      return response.data;
    } else {
      const response: any = await toast.promise(AxiosService.request(request), {
        pending: {
          render() {
            return messageConfig?.pending || "Please wait! Loading...";
          },
        },
        success: {
          render({ data }) {
            if (messageConfig?.success) {
              const messageVariables = stringUtils.getVariables(
                messageConfig.success
              );
              if (!messageVariables || messageVariables.length === 0)
                return messageConfig.success;
              return stringUtils.generateVariableMessage(
                data?.data,
                messageVariables,
                messageConfig.success
              );
            }
            return "Success";
          },
        },
        error: {
          render({ data }: any) {
            return parseHttpError(data);
          },
        },
      });
      return response.data;
    }
  } catch (error: any) {
    throw error.response;
  }
}

export default HttpService;
