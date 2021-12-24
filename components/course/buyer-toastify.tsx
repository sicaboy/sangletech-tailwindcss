import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { setInterval } from "timers";

function BuyerToastify() {
  return (
    <div>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        transition={Slide}
      />
    </div>
  );
}

//Config the UI of the Toast here
export const showAlternativeToast = (toasts) => {
  toasts.map(
    (i) =>
      setInterval(() => {
        toast.success(`${i} thanh toán thành công`, {
          className: "w-1/2 text-xs mt-3 rounded-lg sm:w-full sm:text-sm",
        });
      }, 200000) //default 15000
  );
};

export default BuyerToastify;
