import React, { useEffect } from "react";
import { connect,  useDispatch  } from "react-redux";
import MainHeader from "../../components/common/MainHeader";
import { getAuthorized } from "../../modules/selector";
import { MyInfo } from "../../App";
import { RootState } from "../../modules";
import { setAccessToken, setMyInfo } from "../../modules/auth";
import { setLoginModaldirectLogin, setLoginModalOpen } from "../../modules/modal";

interface Props {
  readonly isAuthorized: boolean;
  readonly myInfo: MyInfo | null;
}

const MainHeaderContainer = ({ isAuthorized, myInfo }: Props) => {

  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(setLoginModalOpen());
    dispatch(setLoginModaldirectLogin());
  }
  
  const onLogout = () => {
    dispatch(setAccessToken(""));
    dispatch(setMyInfo(null));
  };

  useEffect(() => {
    
  }, [dispatch])

  return (
    <MainHeader
      myInfo={myInfo}
      isAuthorized={isAuthorized}
      onLogin={onLogin}
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
