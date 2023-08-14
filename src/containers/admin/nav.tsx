//? LIBRARY
import { memo } from "react";
import Link from "next/link";

function AdminNav() {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top flex-md-nowrap p-0"
      id="mobile_navbar_top"
    >
      <Link className="navbar-brand col-sm-3 col-md-2 p-3" href="/">
        Phongtro123.com
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="rental-apartment">
              Cho thuê căn hộ
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="rental-house">
              Nhà cho thuê
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="rental-motel">
              Cho thuê phòng trọ
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="rental-ground">
              Cho thuê mặt bằng
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="roommate">
              Tìm người Ở ghép
            </Link>
          </li>

          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="blog">
              Blog
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="user-manal">
              Hướng dẫn
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="/money">
              Nạp tiền
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link className="nav-link" target="_blank" href="/price">
              Bảng giá dịch vụ
            </Link>
          </li>
        </ul>
      </div>
      <div className="button-item menu js_btn_menu">
        {/* <img src="/images/menu-hamburger.svg" /> */}
        <span className="text">Danh mục</span>
      </div>
    </nav>
  );
}
export default memo(AdminNav);
