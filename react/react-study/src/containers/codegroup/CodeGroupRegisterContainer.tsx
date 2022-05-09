import { useHistory } from 'react-router-dom';
import CodeGroupRegisterForm from '../../components/codegroup/CodeGroupRegisterForm';
import * as api from "../../lib/api";


function CodeGroupRegisterContainer (){

  const history = useHistory();

  const onRegister = async (groupCode : string , groupName : string) => {
    try {
      const response = await api.writeCodeGroup(groupCode , groupName);

      alert("등록이 완료되었습니다.");

      history.push("/codegroup/read/" + response.data.groupCode);

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
  }

  return (
    <CodeGroupRegisterForm onRegister={onRegister} />
  ) 
};

export default CodeGroupRegisterContainer;