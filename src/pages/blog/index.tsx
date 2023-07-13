// APP
import {
  Header,
  Container,
  Footer,
  NavBarMenu,
} from "../../containers/public/index";
const Blog = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu />
      {/* <Container categoryCode="" /> */}
      <Footer />
    </div>
  );
};
export default Blog;
