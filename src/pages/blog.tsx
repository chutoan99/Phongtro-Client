import { Header, Container, Footer, NavBarMenu } from "../components/index";

const Blog = () => {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="blog" />
      {/* <Container /> */}
      <Footer />
    </div>
  );
};
export default Blog;
