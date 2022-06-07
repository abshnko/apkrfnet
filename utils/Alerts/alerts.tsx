import { ToastContainer, toast } from "react-toastify";
import Toast from "./Toast/Toast";
import toastStyle from "../Alerts/Toast/Toast.module.scss";
import { IToast } from "../../types";

export const showAlertEN = () => {
  toast(
    <Toast
      message="Вы в своем уме? Какой здоровый человек, по-вашему, захочет читать все это на английском?"
      button="Не сказали..."
    />
  );
};

export const showAlertWriteToUs = () =>
  toast(
    <Toast
      message="Если у вас появились вопросы, то вы можете написать на наш факс. Если у вас нет факса, то вы можете приехать к нам офис и бесплатно написать жалобу."
      button="Ладно"
    />
  );