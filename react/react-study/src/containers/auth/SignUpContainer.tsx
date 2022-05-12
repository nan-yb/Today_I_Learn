import React from 'react';
import { useHistory } from 'react-router-dom';
import SignUpForm from '../../components/auth/SignUpForm';
import { signUp } from '../../lib/api';


function SignUpContainer (){

  const history = useHistory();

  const onSignUp = async (userId : string , userName : string , password : string , job :string) => {
    try {
      await signUp(userId , userName , password , job);
      alert('회원가입이 완료되었습니다.');
      history.push('/signin');
    } catch (e : any) {
      if(e.response.status === 400) {
        alert('잘못된 요청입니다.');
      }else if(e.response.status === 401){
        alert('로그인이 필요합니다.');
        history.push('/signin');
      }else if(e.response.status === 403){
        alert('접근 권한이 없습니다.');
        history.goBack();
      }else { 
        alert(e.response.data.message);
      }
    }
  }

  return (
    <SignUpForm onSignUp = {onSignUp} />
  )
};

export default SignUpContainer;