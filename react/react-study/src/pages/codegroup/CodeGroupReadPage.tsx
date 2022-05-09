import React from 'react';
import { useParams } from 'react-router-dom';
import CodeGroupReadContainer from '../../containers/codegroup/CodeGroupReadContainer';
import MainLayout from '../../layout/MainLayout';

function CodeGroupReadPage (){
  const { groupCode } : { groupCode : string} = useParams();

  return ( 
    <MainLayout>
      <CodeGroupReadContainer groupCode={groupCode} />
    </MainLayout>
  ) 
};

export default CodeGroupReadPage;