import { getLocalStorage } from "@service/localStorageService";

const hasher = require("hash.js/lib/hash/sha/256");

const xUserAgent = hasher()
  .update(`${Math.floor(Math.random() * Math.floor(1000))}`)
  .digest("hex");

const AUTH_TOKEN_PREFIX = "Bearer ";

export const createRequest = (
  url: string,
  method: string = "get",
  data: any = null,
  token?: any,
  auth?: boolean,
  headers: any = {}
) => {
  // let headers = {
    headers["x-user-agent"] = xUserAgent;
  // };

  let request: any = {
    baseURL: "http://13.202.158.240:8001/v1/main",
    headers: headers,
    method,
    url,
  };

  if (token) {
    request.headers.authorization = token;
  }

  let urlHash = hasher().update(JSON.stringify(request)).digest("hex");

  request.headers["x-hash"] = urlHash;

  if (auth){
    request.headers["authorization"] = getLocalStorage("token");
  }
  request.data = data;
  return request;
};
