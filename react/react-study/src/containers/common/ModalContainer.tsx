import LoginModal from "../../components/common/LoginModal";
import RegisterModal from "@components/common/RegisterModal";

import { useSelector } from "react-redux";
import { ModalInfo } from "src/App";
import { useEffect } from "react";

// interface Props {
// }

const ModalContainer = () => {

  const modal = useSelector(({ show , login , register , writing }: ModalInfo) => ({
    show: show,
    login : login , 
    register : register , 
    writing : writing 
  }));

  if(!modal) return null;
  if(!modal.show) return null;


  return (
    <>
      { modal.login && (
        <LoginModal />
      )}

      { modal.register && (
        <RegisterModal />
      )}

    </>
  ); 
};

export default ModalContainer;
