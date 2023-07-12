// LIBRARY
import Link from "next/link";
// APP
import { Support } from "../../containers/public/index";
import { AdminProfile } from "../../containers/admin/index";
import AdminLayout from "../../layouts/admin.layout";

export default function ProfilePage() {
  return (
    <main role="main" className="ml-sm-auto col-lg-10">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Phongtro123.com</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/admin">Quản lý</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Cập nhật thông tin cá nhân
          </li>
        </ol>
      </nav>
      <AdminProfile />
      <Support />
    </main>
  );
}
ProfilePage.Layout = AdminLayout;
