// LIBRARY

// APP
import InputNewPost from "../graphql/arguments/input_new_post.args";
import { Header, Footer, NavBarMenu } from "../containers/public/index";
import useTokenValidation from "../hooks/useTokenValidation.hook";
import InforLocal from "../models/InforLocal";
import { useQueryAreas } from "../hooks/useQueryAreas";
import { useQueryUserId } from "../hooks/useQueryUserId";
import { useQueryPrices } from "../hooks/useQueryPrices";
import { useQueryCategories } from "../hooks/useQueryCategories";
import { useQueryProvinces } from "../hooks/useQueryProvinces";
import { useQueryNewPosts } from "../hooks/useQueryNewPosts";

export default function DefaultLayout({ children }) {
  const dataUser: InforLocal = useTokenValidation();
  const payloadNewPost: InputNewPost = {
    pageSize: 10,
    pageNumber: 1,
  };

  useQueryNewPosts(payloadNewPost);
  useQueryProvinces();
  useQueryCategories();
  useQueryPrices();
  useQueryAreas();
  useQueryUserId(dataUser?.id);

  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu />
      {children}
      <Footer />
    </div>
  );
}
