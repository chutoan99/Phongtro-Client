import { Header, Container, Footer, NavBarMenu } from "../containers/index";
const UserManual = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="user-manal" />
      <Container path="user-manal" categoryCode="" />
      <Footer />
    </div>
  );
};
export default UserManual;
