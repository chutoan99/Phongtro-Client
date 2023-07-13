// APP
import {
  Header,
  Container,
  Footer,
  NavBarMenu,
} from "../../containers/public/index";
const UserManual = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu />
      <Container path="user-manal" categoryCode="" />
      <Footer />
    </div>
  );
};
export default UserManual;