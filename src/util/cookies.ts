import { Cookies } from "react-cookie";

const cookies = new Cookies();


export const setCookie = (name:string, value:string) => cookies.set(name, value);
export const getCookie = (name:string) => cookies.get(name);
export const removeCookie = (name: string) => cookies.remove(name);