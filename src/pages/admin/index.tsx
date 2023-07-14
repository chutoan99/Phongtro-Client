// LIBRARY
import Link from "next/link";

// APP
import ICONS from "../../../public/assets/icons";
import { Support } from "../../containers/public";
import { Section } from "../../containers/admin";
import AdminLayout from "../../layouts/admin.layout";
import { menuManage2 } from "../../utils/menuUser";
export default function AdminPage() {
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
            <Link href="">Quản lý</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Đăng tin mới
          </li>
        </ol>
      </nav>
      <Link
        className="btn btn-danger btn-block d-flex align-items-center"
        href="/admin/create"
        style={{
          backgroundColor: "#dc3545",
          borderColor: "#dc3545",
          display: "flex",
          gap: "10px",
          height: "40px",
        }}
      >
        {ICONS.ICON_CREATE}
        Đăng tin mới
      </Link>
      <div>
        <Section data={menuManage2} />
      </div>
      <Support />
    </main>
  );
}
AdminPage.Layout = AdminLayout;
