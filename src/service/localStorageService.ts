import { eventBus } from "./eventService";

export const getLocalStorage = (key: keyof iUser) => {
  let user: iUser = {
    user_id: null,
    first_name: null,
    email: null,
    last_name: null,
    user_name: null,
    mobile_number: null,
    token: null,
    refresh_token: null,
    isLoggedIn: false,
  };

  if (
    typeof window !== "undefined" &&
    localStorage &&
    localStorage.getItem("user")
  )
    user = JSON.parse(localStorage.getItem("user") as any);
  
  return user[key] || null;
};

export const setLocalStorage = (key: keyof iUser, value: any) => {
  let user: any = {
    user_id: null,
    first_name: null,
    last_name: null,
    user_name: null,
    mobile_number: null,
    token: null,
    refresh_token: null,
    isLoggedIn: false,
  };

  if (
    typeof window !== "undefined" &&
    localStorage &&
    localStorage.getItem("user")
  )
    user = JSON.parse(localStorage.parse("user"));
  user[key] = value;

  if (typeof window !== undefined && localStorage)
    localStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const clearUserLocalStorage = () => {
  if (typeof window !== "undefined" && localStorage) {
    eventBus.dispatch("authUser", { message: "user logout", type: 2 });
    localStorage.removeItem("user");
  }
};

export const setUserLocalStorage = (user: iUser) => {
  if (typeof window !== "undefined" && localStorage)
    localStorage.setItem("user", JSON.stringify(user ));
};

const isBoolean = (value: string) => {
  if (value) value = (value + "")?.toLowerCase();
  if (value == "true" || value == "false") {
    return value == "true";
  }
  return null;
};

export const localStorageServiceGet = (
  key: string,
  defaultValue: any = null
) => {
  if (typeof window !== "undefined" && localStorage) {
    let data: any = localStorage.getItem(key);
    if (isBoolean(data) !== null) return isBoolean(data);
    if (data === "null") return null;

    return data || defaultValue;
  }
};

export const localStorageServiceSet = (key: string, value: any) => {
  if (typeof value != "string") value = JSON.stringify(value);
  if (typeof window !== "undefined" && localStorage) {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }
};
