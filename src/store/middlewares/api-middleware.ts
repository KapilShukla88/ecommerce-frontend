import * as actions from "./api-middleware-actions";
import HttpService from "@service/http-service";

const dispatchOnStart = (dispatch: any, onStart: any, reducerData: any) => {
  if (onStart)
    dispatch({ type: onStart, payload: { reducerData: reducerData } });
};

const dispatchOnSuccess = (
  dispatch: any,
  onSuccess: any,
  response: any,
  reducerData: any
) => {
  dispatch({
    type: actions.apiCallSuccess.type,
    payload: { data: response, reducerData: reducerData },
  });
  if (onSuccess) {
    return dispatch({
      type: onSuccess,
      payload: { data: response, reducerData: reducerData },
    });
  }
};

const dispatchOnError = (
  dispatch: any,
  onError: any,
  error: any,
  reducerData: any
) => {
  dispatch({
    type: actions.apiCallFailed.type,
    payload: error?.response?.message || "network error",
  });
  if (onError)
    dispatch({
      type: onError,
      payload: { data: error?.response?.data, reducerData: reducerData },
    });
};

const apiMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const {
      url,
      method,
      data,
      onStart,
      onSuccess,
      onError,
      auth,
      messageConfig,
      reducerData,
      overrideBaseURL,
    } = action.payload;

    try {
      dispatchOnStart(dispatch, onStart, reducerData);
      const response = await HttpService<any>(
        url,
        method,
        data,
        auth,
        messageConfig,
        overrideBaseURL
      );
      dispatchOnSuccess(dispatch, onSuccess, response, reducerData);
    } catch (error: any) {
      dispatchOnError(dispatch, onError, error, reducerData);
    }
  };

export default apiMiddleware;
