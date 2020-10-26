import { notify } from "react-notify-toast";

const popupStyles = { background: "#1A3400", text: "#EBE8E5" };

export const popupNotification = (message: string) => {
  notify.show(message, "custom", 3001, popupStyles);
};
