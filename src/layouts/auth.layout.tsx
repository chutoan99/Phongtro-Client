import { Header, NavBarMenu } from "../containers/public";
export default function AuthLayout({ children }) {
  return (
    <div id="webpage">
      <Header />
      <NavBarMenu />
      {children}
    </div>
  );
}
