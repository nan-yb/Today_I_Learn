import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import AdminSetupPage from "./pages/member/AdminSetupPage";
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";

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

export interface CodeGroup {
  groupCode: string;
  groupName: string;
  regDate: string;
}

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
      <Route component={AdminSetupPage} path="/member/setup" />
      <Route component={CodeGroupListPage} path="/codegroup" exact />
      <Route component={CodeGroupRegisterPage} path="/codegroup/create" />
      <Route component={CodeGroupModifyPage} path="/codegroup/edit/:groupCode" />
      <Route component={CodeGroupReadPage} path="/codegroup/read/:groupCode" />
    </>
  );
}

export default App;
