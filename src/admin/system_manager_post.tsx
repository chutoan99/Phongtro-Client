// LIBRARY
import Link from "next/link";
import { useState } from "react";
function SystemManagerPost({ data }) {
  const [isShowDropDown1, setIsShowDropDown1] = useState(false);
  const [isShowDropDown2, setIsShowDropDown2] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <h1 className="h2">Quản lý tin đăng</h1>

        <div
          className="btn-toolbar mb-2 mb-md-0 d-flex"
          style={{ gap: "10px" }}
        >
          <div className="dropdown mr-1">
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-sm"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {
                setIsShowDropDown2(!isShowDropDown2);
              }}
            >
              Lọc theo loại VIP
            </button>
            {isShowDropDown2 && (
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
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
            )}
          </div>
          <div className="dropdown mr-1">
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-sm"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {
                setIsShowDropDown1(!isShowDropDown1);
              }}
            >
              Lọc theo trạng thái
            </button>
            {isShowDropDown1 && (
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
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
            )}
          </div>
          <Link
            className="btn btn-danger btn-sm d-none d-md d-flex align-items-center"
            href="/system/create"
            style={{
              color: "#fff",
              backgroundColor: "#dc3545",
              borderColor: "#dc3545",
            }}
          >
            Đăng tin mới
          </Link>
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
                <td>{data?.overviews?.code}</td>
                <td>
                  <div className="post_thumb">
                    <a href="#" target="_blank">
                      <img src={data?.listImage?.postImg} alt={data?.title} />
                    </a>
                  </div>
                </td>
                <td>
                  {data?.categoryCode === "NCT" && (
                    <span className="badge badge-pill badge-primary ">
                      Nhà cho thuê
                    </span>
                  )}

                  <a className="post_title" target="_blank" href="#">
                    {data?.title}
                  </a>
                  <p style={{ marginTop: "10px" }}>
                    <strong>Địa chỉ:</strong> {data?.address}
                  </p>
                  <div className="post_btn_toolbar mt-3">
                    <a
                      href=""
                      className="btn btn-sm btn_danglai text-danger btn-warning"
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
                        className="feather feather-credit-card"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="22"
                          height="16"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>{" "}
                      Thanh toán tin
                    </a>
                    <a href="#" className="btn btn-sm">
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
                        className="feather feather-edit-2"
                      >
                        <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                      </svg>{" "}
                      Sửa tin
                    </a>
                  </div>
                  <span
                    style={{
                      display: "block",
                      color: "#333",
                      marginTop: "10px",
                    }}
                  >
                    <em>Lượt hiển thị: 0</em>
                  </span>
                  <span
                    style={{
                      display: "block",
                      color: "#999",
                      marginTop: "10px",
                    }}
                  >
                    Cập nhật gần nhất: {data?.attributes?.published}
                  </span>
                </td>
                <td>
                  <div className="post_price">{data?.attributes?.price}</div>
                </td>
                <td>{data?.overviews?.created}</td>
                <td>{data?.overviews?.expired}</td>
                <td>
                  <span
                    className="text text-warning"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Chưa thanh toán
                  </span>
                </td>
              </tr>
              {/* <tr>
                <td>
                  Bạn chưa có tin đăng nào. Bấm <a href="">vào đây</a> để bắt
                  đầu đăng tin
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default SystemManagerPost;
