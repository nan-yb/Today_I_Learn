import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import AdminSetupPage from "./pages/member/AdminSetupPage";
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";
import CodeDetailListPage from "./pages/codedetail/CodeDetailListPage";
import CodeDetailRegisterPage from "./pages/codedetail/CodeDetailRegisterPage";
import CodeDetailModifyPage from "./pages/codedetail/CodeDetailModifyPage";
import CodeDetailReadPage from "./pages/codedetail/CodeDetailReadPage";
import SignUpPage from './pages/auth/SignUpPage';

export interface LoginInput {
  userId: string;
  password: string;
}

export interface AuthInfo {
  auth: string;
}

export interface MyInfo {
  userName: string;
  authList: AuthInfo[];
}

export interface ModalInfo { 
  show: boolean;
  login : boolean;
  register : boolean;
}

export interface CodeGroup {
  groupCode: string;
  groupName: string;
  regDate: string;
}

export interface CodeDetailKey { 
  groupCode : string ; 
  codeValue : string;
}

export interface CodeDetail {
  groupCode : string ; 
  codeValue : string ; 
  codeName : string ; 
  sortSeq : number;
  regDate : string ;
}

export interface CodeValue { 
  label : string ; 
  value : string ; 
}

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      
      <Route component={SignInPage} path="/signin" exact />
      <Route component={SignUpPage} path="/signup" exact />

      <Route component={AdminSetupPage} path="/member/setup" />
      
      <Route component={CodeGroupListPage} path="/codegroup" exact />
      <Route component={CodeGroupRegisterPage} path="/codegroup/create" />
      <Route component={CodeGroupModifyPage} path="/codegroup/edit/:groupCode" />
      <Route component={CodeGroupReadPage} path="/codegroup/read/:groupCode" />
      
      <Route component={CodeDetailListPage} path="/codedetail" exact />
      <Route component={CodeDetailRegisterPage} path="/codedetail/create" />
      <Route component={CodeDetailModifyPage} path="/codedetail/edit/:groupCode/:codeValue" />
      <Route component={CodeDetailReadPage} path="/codedetail/read/:groupCode/:codeValue" />
    </>
  );
}

export default App;
