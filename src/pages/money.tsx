import { Header, Container, Footer, NavBarMenu } from "../components/index";

const Money = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="money" />
      <Container />
      <Footer />
    </div>
  );
};
export default Money;
