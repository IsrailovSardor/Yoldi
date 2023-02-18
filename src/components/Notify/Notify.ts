import { IArguments } from "@/core/models/user";
import { toast } from "react-toastify";



export const notify = ({ type, text }: IArguments) => {
  switch (type) {
    case "success":
      toast.success(text, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    case "error":
      toast.error(text, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    default:
      break;
  }
};
