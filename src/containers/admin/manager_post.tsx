//? LIBRARY
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
//? HOOKS
import {
  useMutationDeletePost,
  useQueryPostsOfUser,
} from "../../services/post/index.hook";
import useAuth from "../../hooks/useAuth.hook";

//? APPS

function AdminManagerPost() {
  const { dataUser } = useAuth();
  const [isShowDropDown1, setIsShowDropDown1] = useState(false);
  const [isShowDropDown2, setIsShowDropDown2] = useState(false);
  const [postId, setPostId] = useState();
  const { data: dataPosts, isLoading } = useQueryPostsOfUser(dataUser?.id);

  const { mutate } = useMutationDeletePost(postId);
  const onDeletePOst = (item: any) => {
    console.log(item, "item");
    setPostId(item.id);
    mutate(postId);
  };

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
              className="btn-custom  btn btn-outline-secondary dropdown-toggle btn-sm "
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
                <Link className="dropdown-item" href="#">
                  Tin Hot
                </Link>
                <Link className="dropdown-item" href="#">
                  Tin VIP 30
                </Link>
                <Link className="dropdown-item" href="#">
                  Tin VIP 20
                </Link>
                <Link className="dropdown-item" href="#">
                  Tin VIP 10
                </Link>
                <Link className="dropdown-item" href="#">
                  Tin thường
                </Link>
              </div>
            )}
          </div>
          <div className="dropdown mr-1">
            <button
              className="btn-custom btn btn-outline-secondary dropdown-toggle btn-sm"
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
                <Link className="dropdown-item" href="#">
                  Tin đang hiển thị
                </Link>
                <Link className="dropdown-item" href="#">
                  Tin hết hạn
                </Link>
                <Link className="dropdown-item" href="#">
                  Tin đang ẩn
                </Link>
              </div>
            )}
          </div>
          <Link
            className="btn btn-danger btn-sm d-none d-md d-flex align-items-center"
            href="/admin/create"
            style={{
              height: "27px",
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
                {dataPosts.post.map((item: any, index: number) => (
                  <tr key={index}>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {item?.overviews?.code}
                    </td>
                    <td>
                      <div className="post_thumb">
                        <Link href="#" target="_blank">
                          <img
                            src={item?.listImage?.postImg}
                            alt={item?.title}
                          />
                        </Link>
                      </div>
                    </td>
                    <td>
                      {item?.categoryCode === "NCT" && (
                        <span className="badge badge-pill badge-primary ">
                          Nhà cho thuê
                        </span>
                      )}

                      <Link className="post_title" target="_blank" href="#">
                        {item?.title}
                      </Link>
                      <p style={{ marginTop: "10px" }}>
                        <strong>Địa chỉ:</strong> {item?.address}
                      </p>
                      <div className="post_btn_toolbar mt-3 ">
                        <Link
                          href="#"
                          className="btn btn-sm btn_danglai text-danger btn-warning disabled-button"
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
                          </svg>
                          Thanh toán tin
                        </Link>
                        <button className="btn btn-sm">
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
                          </svg>
                          Sửa tin
                        </button>
                        <button
                          className="btn btn-sm"
                          onClick={() => onDeletePOst(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-eye-off"
                          >
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                            <line x1="1" y1="1" x2="23" y2="23"></line>
                          </svg>{" "}
                          Ẩn tin
                        </button>
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
                        Cập nhật gần nhất: {item?.attributes?.published}
                      </span>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <div className="post_price">
                        {item?.attributes?.price}
                      </div>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {item?.overviews?.created}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {item?.overviews?.expired}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <span
                        className="text text-warning"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Chưa thanh toán
                      </span>
                    </td>
                  </tr>
                ))}
                {dataPosts.post.length === 0 && (
                  <tr>
                    <td>
                      Bạn chưa có tin đăng nào. Bấm<Link href="#">vào đây</Link>
                      để bắt đầu đăng tin
                    </td>
                  </tr>
                )}
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
