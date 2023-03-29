import { Header, Container, Footer, NavBarMenu } from "../components/index";

const Price = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="price" />
      {/* <Container /> */}
      <Footer />
    </div>
  );
};

export default Price;
