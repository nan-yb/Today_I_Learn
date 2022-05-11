import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CodeDetailList from '../../components/codedetail/CodeDetailList';
import { RootState } from '../../modules';
import { fetchList, FETCH_LIST } from '../../modules/codedetail';

function CodeDetailListContainer (){ 

  const dispatch = useDispatch();

  const { codeDetails , isLoading } = useSelector(({codedetail , loading} : RootState) => ({
    codeDetails : codedetail.codeDetails ,
    isLoading : loading[FETCH_LIST],
  }))

  useEffect(() => {
    dispatch(fetchList())
  } , [dispatch])

  return <CodeDetailList codeDetails={codeDetails} isLoading={isLoading} />
}

export default CodeDetailListContainer;