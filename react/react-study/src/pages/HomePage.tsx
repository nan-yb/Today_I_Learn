import ModalContainer from "@containers/common/ModalContainer";
import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <Home />
      <ModalContainer/> 
    </MainLayout>
  );
}

export default HomePage;
