import { Fetcher } from "swr";

import { notify } from "@/components/Notify/Notify";
import { IUser } from "../models/user";


export async function patch<T>( body :T) {
  const token = localStorage.getItem("token") || "";
  return await fetch(`https://frontend-test-api.yoldi.agency/api/profile/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (!res?.ok) {
      const errorMessage = await res.json();
      notify({ type: "error", text: errorMessage?.message });
      throw errorMessage;
    }
    return res.json()
  })
}

  const get:Fetcher<IUser, string> = async (url:string) => {
  const token = localStorage.getItem("token") || "";
  return await fetch(`https://frontend-test-api.yoldi.agency/api${url}`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
  }).then(async (res) => {
    if (!res?.ok) {
      const errorMessage = await res.json();
      notify({ type: "error", text: errorMessage?.message });
      throw errorMessage;
    }
    return res.json()
  })
}


 async function post(url:string, body:any) {
  const token = localStorage.getItem("token") || "";
  return await fetch(`https://frontend-test-api.yoldi.agency/api/${url}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "X-API-KEY": token || "",
    },
    body: body,
  }).then(async (res) => {
    if (!res?.ok) {
      const errorMessage = await res.json();
      notify({ type: "error", text: errorMessage?.message });
      throw errorMessage;
    }
    return res.json()
  })
}


export const crud = { post, get, patch }