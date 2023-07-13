import { Header, NavBarMenu } from "../containers/public/index";
import { useQueryCategories } from "../hooks/useQueryCategories";
export default function AuthLayout({ children }) {
  useQueryCategories();
  return (
    <div id="webpage">
      <Header />
      <NavBarMenu path="index" />
      {children}
    </div>
  );
}
