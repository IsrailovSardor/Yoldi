import { notify } from "@/components/Notify/Notify";


export async function editUserProfile<T>( body :T) {
  const token = localStorage.getItem("token");
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
