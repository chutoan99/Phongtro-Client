import { Header, Container, Footer, NavBarMenu } from "../components/index";

const UserManual = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="user-manal" />
      {/* <Container /> */}
      <Footer />
    </div>
  );
};
export default UserManual;
