function SystemNavMenu() {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top flex-md-nowrap p-0"
      id="mobile_navbar_top"
    >
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
        Phongtro123.com
      </a>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="/">
              Trang chủ
            </a>
          </li>

          <li className="nav-item d-none d-md-block">
            <a className="nav-link" target="_blank" href="">
              Phòng trọ
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" target="_blank" href="">
              Nhà cho thuê
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" target="_blank" href="">
              Căn hộ
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" target="_blank" href="">
              Mặt bằng
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" target="_blank" href="">
              Ở ghép
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" target="_blank" href="">
              Bảng giá dịch vụ
            </a>
          </li>
        </ul>
        <ul className="navbar-nav float-right pr-4">
          <div className="dropdown">
            <button
              className="btn btn_account d-none d-md-flex"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Xin chào <strong>cu toan</strong>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuLink"
            >
              <a className="dropdown-item" href="">
                Thoát
              </a>
            </div>
          </div>
        </ul>
      </div>
      <div className="button-item menu js_btn_menu">
        <img src="/images/menu-hamburger.svg" />
        <span className="text">Danh mục</span>
      </div>
    </nav>
  );
}
export default SystemNavMenu;
