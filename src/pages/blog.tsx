import { Header, Container, Footer, NavBarMenu } from "../containers/index";
const Blog = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="blog" />
      <Container path="blog" categoryCode="" />
      <Footer />
    </div>
  );
};
export default Blog;
