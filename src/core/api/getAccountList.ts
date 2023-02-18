import { Fetcher } from 'swr'

import { IUser } from "../models/user";
import { notify } from "@/components/Notify/Notify";


const getAccountList : Fetcher<IUser[], string> = async () => {
  return await fetch(`https://frontend-test-api.yoldi.agency/api/user/`)
    .then(async (res) => {
      if (!res?.ok) {
        const errorMessage = await res.json();
        notify({ type: "error", text: errorMessage?.message });
        throw errorMessage;
      }
      return res.json()
    })
}

export default getAccountList;