// APP
import {
  Header,
  Container,
  Footer,
  NavBarMenu,
} from "../../containers/public/index";
const Price = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu />
      <Container path="price" categoryCode="" />
      <Footer />
    </div>
  );
};

export default Price;
