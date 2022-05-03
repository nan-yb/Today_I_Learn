import React, { useEffect } from 'react';
import { useDispatch , useSelector} from "react-redux";
import SignInForm from "../../components/auth/SignInForm";

import {withRouter , RouteComponentProps} from "react-router-dom";
import { login } from "../../modules/auth";

import { RootState} from "../../modules";


function SignInContainer ({history}: RouteComponentProps){
  const dispatch = useDispatch();

  const { accessToken } = useSelector(({ auth} : RootState)=>({
    accessToken : auth.accessToken,
  }));

  const onSignIn = (userId : string , password : string) => {
    try {
      dispatch(login({userId , password}));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(accessToken) {
      alert('로그인 되었습니다.');
      history.push("/")
    }
  } , [accessToken , dispatch , history])

  return ( 
    <SignInForm onSignIn={onSignIn} />
  )
};

export default withRouter(SignInContainer);