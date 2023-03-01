import Support from "../support";
import SystemBreadcrumb from "./system-breadcrumb";

function SystemManager() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý tin đăng</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="dropdown mr-1">
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-sm"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Lọc theo loại VIP
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">
                Tin Hot
              </a>
              <a className="dropdown-item" href="">
                Tin VIP 30
              </a>
              <a className="dropdown-item" href="">
                Tin VIP 20
              </a>
              <a className="dropdown-item" href="">
                Tin VIP 10
              </a>
              <a className="dropdown-item" href="">
                Tin thường
              </a>
            </div>
          </div>
          <div className="dropdown mr-1">
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-sm"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Lọc theo trạng thái
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">
                Tin đang hiển thị
              </a>
              <a className="dropdown-item" href="">
                Tin hết hạn
              </a>
              <a className="dropdown-item" href="">
                Tin đang ẩn
              </a>
            </div>
          </div>
          <a className="btn btn-danger btn-sm d-none d-md-block" href="">
            Đăng tin mới
          </a>
          <div className="d-lg-none" style={{ width: "100%" }}>
            <a className="btn btn-danger btn-block mt-3" href="">
              Đăng tin mới
            </a>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block">
        <div className="table-responsive">
          <table className="table table_post_listing table-bordered _table-hover">
            <thead>
              <tr>
                <th>Mã tin</th>
                <th style={{ textAlign: "center", whiteSpace: "nowrap" }}>
                  Ảnh đại diện
                </th>
                <th>Tiêu đề</th>
                <th>Giá</th>
                <th style={{ whiteSpace: "nowrap" }}>Ngày bắt đầu</th>
                <th style={{ whiteSpace: "nowrap" }}>Ngày hết hạn</th>
                <th style={{ whiteSpace: "nowrap" }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Bạn chưa có tin đăng nào. Bấm <a href="">vào đây</a> để bắt
                  đầu đăng tin
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default SystemManager;
