//? LIBRARY
import Link from "next/link";
//? APP
import AdminLayout from "../../layouts/admin.layout";
import { Support } from "../../components";
import { ManagerPost } from "../../containers/admin";

export default function ManagePage() {
  return (
    <main
      role="main"
      className="ml-sm-auto col-lg-10"
      style={{ background: "white" }}
    >
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Phongtro123.com</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/admin">Quản lý</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Danh sách tin đăng
          </li>
        </ol>
      </nav>
      <ManagerPost />
      <Support />
    </main>
  );
}
ManagePage.Layout = AdminLayout;
