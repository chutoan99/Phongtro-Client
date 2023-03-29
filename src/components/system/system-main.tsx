import Link from "next/link";
import Support from "../support";
function SystemMain(props) {
  return (
    <main role="main" className="ml-sm-auto col-lg-10">
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
        href="/system/create"
        style={{
          backgroundColor: "#dc3545",
          borderColor: "#dc3545",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-plus-circle"
          style={{ marginRight: "10px" }}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        Đăng tin mới
      </Link>
      <div>{props?.children}</div>
      <Support />
    </main>
  );
}
export default SystemMain;
