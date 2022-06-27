import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import toastStyle from './Toast.module.scss';

const MyToastContainer = () => {
  const modalContent = (
    <ToastContainer
      autoClose={7000}
      closeButton={false}
      className={toastStyle.toast_container}
      toastClassName={toastStyle.toast_wrapper}
      newestOnTop
      limit={6}
      hideProgressBar
    />
  );

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as unknown as HTMLElement
    );
  } else {
    return null;
  }
};

export default MyToastContainer;
