//? LIBRARY
import Link from "next/link";
//? APP
import { Support } from "../../components";
import { CreatePost } from "../../containers/admin";
import AdminLayout from "../../layouts/admin.layout";

export default function CreatePage() {
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
            Đăng tin mới
          </li>
        </ol>
      </nav>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h1">Đăng tin mới</h1>
      </div>
      <CreatePost />
      <Support />
    </main>
  );
}
CreatePage.Layout = AdminLayout;
