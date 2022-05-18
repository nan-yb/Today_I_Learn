import React from "react";
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import MainHeader from "../../components/common/MainHeader";
import { getAuthorized } from "../../modules/selector";
import { ModalInfo, MyInfo } from "../../App";
import { RootState } from "../../modules";
import { setAccessToken, setMyInfo } from "../../modules/auth";
import client from "../../lib/client";
import Cookies from "js-cookie";
import { setLoginModalOpen } from "../../modules/modal";

interface Props {
  readonly isAuthorized: boolean;
  readonly myInfo: MyInfo | null;
}

const MainHeaderContainer = ({ isAuthorized, myInfo }: Props) => {
  const dispatch = useDispatch();

  const modal = useSelector(({ show , login , register }: ModalInfo) => ({
    show: show,
    login: login,
    register : register ,
    writing : true,
  }));


  const onLogout = () => {
    delete client.defaults.headers.common.Authorization;
    Cookies.remove("accessToken");

    dispatch(setAccessToken(""));
    dispatch(setMyInfo(null));
  };

  return (
    <MainHeader
      myInfo={myInfo}
      modal={ modal }
      isAuthorized={isAuthorized}
      onLogout={onLogout}
    />
  );
};

export default connect((state: RootState) => {
  return {
    isAuthorized: getAuthorized(state),
    myInfo: state.auth.myInfo,
  };
})(MainHeaderContainer);
