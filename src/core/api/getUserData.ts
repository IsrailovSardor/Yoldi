import { Fetcher } from 'swr'

import { IUser } from "../models/user";
import { notify } from "@/components/Notify/Notify";


export const getUserData : Fetcher<IUser, string> = async (url) => {
  const token = localStorage.getItem("token") || "";
  if( token === "" ) return token ;
  return await fetch(`https://frontend-test-api.yoldi.agency/api${url}`,{
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token || "",
    },
  })
    .then(async (res) => {
      if (!res?.ok) {
        const errorMessage = await res.json();
        notify({ type: "error", text: errorMessage?.message });
        throw errorMessage;
      }
      return res.json()
    })
}

