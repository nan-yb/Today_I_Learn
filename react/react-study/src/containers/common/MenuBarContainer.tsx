import React from 'react';
import MenuBar from '../../components/common/MenuBar';
import { getAuthorized , isAdmin} from '../../modules/selector';
import { connect } from 'react-redux';
import { RootState } from "../../modules";

interface Props {
  isAuthorized : boolean ;
  isAdmin : boolean ; 
}

function MenuBarContainer ({ isAuthorized , isAdmin } : Props){
  return ( <MenuBar 
    isAuthorized={isAuthorized}  
    isAdmin={isAdmin}
  /> )
};

export default connect((state : RootState ) => {
  return {
    isAuthorized : getAuthorized(state),
    isAdmin : isAdmin(state)
  };
})(MenuBarContainer);
