import { StoreType } from "./store";

interface IConfig {
  headers: any;
}

export function setConfig(getState: () => StoreType) {
  const config: IConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = getState().auth.token;
  if (token) config.headers["x-auth-token"] = token;
  return config;
}

export function setCookie(
  cname: string,
  cvalue: string | undefined,
  exdays: number
) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname: string) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkCookie() {
  let user: string | null = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
