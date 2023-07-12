// APP
import { Header, Container, Footer, NavBarMenu } from "../containers/public/index";
const Money = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="money" />
      <Container path="money" categoryCode="" />
      <Footer />
    </div>
  );
};
export default Money;
