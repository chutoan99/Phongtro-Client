// LIBRARY

// APP
import { Header, Footer, NavBarMenu } from "../containers/public/index";
import useTokenValidation from "../hooks/useTokenValidation.hook";
import InforLocal from "../models/InforLocal";
import { useQueryAreas } from "../hooks/useQueryAreas";
import { useQueryUserId } from "../hooks/useQueryUserId";
import { useQueryCategories } from "../hooks/useQueryCategories";
import { useQueryProvinces } from "../hooks/useQueryProvinces";

export default function DefaultLayout({ children }) {
  const dataUser: InforLocal = useTokenValidation();

  useQueryProvinces();
  useQueryCategories();
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
