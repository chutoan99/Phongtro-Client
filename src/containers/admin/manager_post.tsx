// LIBRARY
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import useTokenValidation from "../../hooks/useTokenValidation.hook";
import InforLocal from "../../models/InforLocal";
import { useQueryPostsOfUser } from "../../hooks/useQueryPostsOfUser";

function AdminManagerPost() {
  const dataLocal: InforLocal = useTokenValidation();
  const [isShowDropDown1, setIsShowDropDown1] = useState(false);
  const [isShowDropDown2, setIsShowDropDown2] = useState(false);
  const { data: dataUser, isLoading } = useQueryPostsOfUser(dataLocal?.id);
  const checkStatus = (dateTime) =>
    moment(dateTime, "DD/MM/YYYY").isSameOrAfter(new Date().toDateString());
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
                <Link className="dropdown-item" href="">
                  Tin Hot
                </Link>
                <Link className="dropdown-item" href="">
                  Tin VIP 30
                </Link>
                <Link className="dropdown-item" href="">
                  Tin VIP 20
                </Link>
                <Link className="dropdown-item" href="">
                  Tin VIP 10
                </Link>
                <Link className="dropdown-item" href="">
                  Tin thường
                </Link>
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
                <Link className="dropdown-item" href="">
                  Tin đang hiển thị
                </Link>
                <Link className="dropdown-item" href="">
                  Tin hết hạn
                </Link>
                <Link className="dropdown-item" href="">
                  Tin đang ẩn
                </Link>
              </div>
            )}
          </div>
          <Link
            className="btn btn-danger btn-sm d-none d-md d-flex align-items-center"
            href="/admin/create"
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
            {!isLoading ? (
              <tbody>
                <tr>
                  <td>{dataUser?.overviews?.code}</td>
                  <td>
                    <div className="post_thumb">
                      <Link href="#" target="_blank">
                        <img
                          src={dataUser?.listImage?.postImg}
                          alt={dataUser?.title}
                        />
                      </Link>
                    </div>
                  </td>
                  <td>
                    {dataUser?.categoryCode === "NCT" && (
                      <span className="badge badge-pill badge-primary ">
                        Nhà cho thuê
                      </span>
                    )}

                    <Link className="post_title" target="_blank" href="#">
                      {dataUser?.title}
                    </Link>
                    <p style={{ marginTop: "10px" }}>
                      <strong>Địa chỉ:</strong> {dataUser?.address}
                    </p>
                    <div className="post_btn_toolbar mt-3">
                      <Link
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
                      </Link>
                      <Link href="#" className="btn btn-sm">
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
                      </Link>
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
                      Cập nhật gần nhất: {dataUser?.attributes?.published}
                    </span>
                  </td>
                  <td>
                    <div className="post_price">
                      {dataUser?.attributes?.price}
                    </div>
                  </td>
                  <td>{dataUser?.overviews?.created}</td>
                  <td>{dataUser?.overviews?.expired}</td>
                  <td>
                    <span
                      className="text text-warning"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Chưa thanh toán
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Bạn chưa có tin đăng nào. Bấm<Link href="#">vào đây</Link>
                    để bắt đầu đăng tin
                  </td>
                </tr>
              </tbody>
            ) : (
              <span className="loader"></span>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
export default AdminManagerPost;
