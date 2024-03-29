//? APP
import { Footer } from "../components";
import { Header, NavBarMenu } from "../containers/public";

export default function DefaultLayout({ children }) {
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu />
      {children}
      <Footer />
    </div>
  );
}
