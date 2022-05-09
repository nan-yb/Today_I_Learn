import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CodeGroupModifyForm from '../../components/codegroup/CodeGroupModifyForm';
import * as api from "../../lib/api";
import { fetchOne , FETCH_ONE } from '../../modules/codegroup';
import { RootState } from "../../modules"; 

interface Props {
  readonly groupCode : string;
}

function CodeGroupModifyContainer ({groupCode}: Props){

  const dispatch = useDispatch();

  const history = useHistory();

  const { codeGroup , isLoading } = useSelector(({codegroup , loading} : RootState) => ({
    codeGroup : codegroup.codeGroup , 
    isLoading : loading[FETCH_ONE]
  }));

  const onModify = async ( groupCode : string , groupName : string) => {
    try {
      await api.modifyCodeGroup(groupCode , groupName);
      alert('수정이 완료되었습니다.');
      history.push('/codegroup/read/' + groupCode);
    } catch (error : any) {
      if(error.response.status === 400 ){
        alert('잘못된 요청입니다.');
      } else if(error.response.status === 401) {
        alert('로그인이 필요합니다..');
        history.push('/signin');
      } else if (error.response.status ===403 ){
        alert('접근 권한이 없습니다.');
        history.goBack();
      }else{
        alert(error.response.data.message);
      }
    }
  };

  useEffect( () => {
    dispatch(fetchOne(groupCode));
  } , [dispatch , groupCode])

  return (
    <CodeGroupModifyForm 
      codeGroup = {codeGroup}
      isLoading = {isLoading}
      onModify = {onModify}
    />
  ) 
};

export default CodeGroupModifyContainer;