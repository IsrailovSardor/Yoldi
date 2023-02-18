import { notify } from "@/components/Notify/Notify"
import { ISignUpArg } from "../models/user";


const onGetToken = async (url:string, body:ISignUpArg) => {
  return await fetch(`https://frontend-test-api.yoldi.agency/api${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(body.arg),
  }).then(async (res:any) => {
    if (!res?.ok) {
      const errorMessage = await res.json();
      notify({ type: "error", text: errorMessage?.message });
      throw errorMessage;
    }
    return res.json()
  });
}

export default onGetToken;