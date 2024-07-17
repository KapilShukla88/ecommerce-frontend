import axios from "axios";
import {
  getLocalStorage,
  localStorageServiceGet,
  localStorageServiceSet,
  setUserLocalStorage,
} from "./localStorageService";
import { API_USER_LOGIN, BASE_URL } from "src/resources/api-end-points";
import { eventBus } from "./eventService";
import { createRequest } from "@utils/request-object";

const EVENT_BUS_OAUTH_LOGOUT = "OAUTH_LOGOUT";

let refreshApiCall: Promise<any> | null = null;

const refreshApiHandler = () => {
  if (refreshApiCall) {
    return refreshApiCall;
  } else {
    let request = createRequest(
      "/refreshToken",
      "POST",
      {
        strategy: "refresh_token",
        refresh_token: getLocalStorage("refresh_token"),
      },
      getLocalStorage("token"),
      false
    );

    refreshApiCall = axios.request(request);
  }
  return refreshApiCall;
};

const handleRefreshToken = async (error: any) => {
  try {
    const tokenRefreshResponse = await refreshApiHandler();
    refreshApiCall = null;
    const token = tokenRefreshResponse.data.token;

    /**
     * update user Token / Saved
     */
    const user = { ...JSON.parse(localStorageServiceGet("user") as any) };
    user.token = token;
    setUserLocalStorage(user);

    let data;
    if (
      error.response.config.method == "post" ||
      error.response.config.method == "patch"
    ) {
      data = JSON.parse(error.response.config.data.toString());
    } else {
      data = error.response.config.data;
    }
    const updateRequest = createRequest(
      error.response.config.url,
      error.response.config.method,
      data,
      token,
      false
    );
    return axios(updateRequest);
  } catch (error: any) {
    console.log("error =>>", error);

    if (error?.response?.status === 498) {
      eventBus.dispatch(EVENT_BUS_OAUTH_LOGOUT, { logout: true });
    }
    return Promise.reject(error);
  }
};

axios.interceptors.response.use(
  (response) => response,
  async (error: any) => {
    if (error?.response?.status === 401) return handleRefreshToken(error);
    return Promise.reject(error);
  }
);

const AxiosService = axios;
export default AxiosService;
