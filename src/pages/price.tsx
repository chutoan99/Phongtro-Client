// APP
import { Header, Container, Footer, NavBarMenu } from "../containers/index";
const Price = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="price" />
      <Container path="price" categoryCode="" />
      <Footer />
    </div>
  );
};

export default Price;
