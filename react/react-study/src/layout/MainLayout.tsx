import React from "react";
import MainHeaderContainer from "../containers/common/MainHeaderContainer";
import Footer from "../components/common/Footer";
import MenuBarContainer from "../containers/common/MenuBarContainer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <MainHeaderContainer />
      <MenuBarContainer />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
