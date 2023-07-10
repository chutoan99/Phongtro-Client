import { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { Support } from "../../containers/index";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import DataInfor from "../../types/dataInfor.type";
import { SystemNavMenu, SystemAside } from "../../admin/index";
const userIdFilePath = require("../../graphql/userId.graphql");

const ProfilePage: NextPage = () => {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const router = useRouter();
  const [dataUser, setDataUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const dataLocal: DataInfor = JSON.parse(localStorage.getItem("token"));
    if (!dataLocal?.token || dataLocal?.token === "undefined") {
      router.push("/login");
    } else {
      const fetchData = async () => {
        const response = await graphQLClient.request<any>(userIdFilePath, {
          userId: dataLocal?.id,
        });
        setDataUser(response?.userId?.response);
      };
      fetchData();
    }
  }, []);
  const handeSubmit = (e: any) => {
    e.preventdefault();
  };
  return (
    <div className="desktop dashboard quan-ly dang-tin dang-tin-moi loaded ready">
      <div id="webpage" style={{ position: "relative" }}>
        <SystemNavMenu />
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "45px" }}
        >
          <div className="row">
            <div className="d-flex">
              {dataUser && <SystemAside dataUser={dataUser} />}

              <main role="main" className="ml-sm-auto col-lg-10">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Phongtro123.com</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/system">Quản lý</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cập nhật thông tin cá nhân
                    </li>
                  </ol>
                </nav>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 className="h2">Cập nhật thông tin cá nhân</h1>
                </div>
                <form
                  className="js-form-submit-data"
                  action="#"
                  onClick={(e) => handeSubmit(e)}
                >
                  <div className="form-group row mt-5">
                    <label
                      htmlFor="user_id"
                      className="col-md-2 offset-md-2 col-form-label"
                    >
                      Mã thành viên
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control disable"
                        id="user_id"
                        value="#128152"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="user_phone"
                      className="col-md-2 offset-md-2 col-form-label"
                    >
                      Số điện thoại
                    </label>
                    <div className="col-md-6">
                      <input
                        type="phone"
                        className="form-control disable"
                        id="user_phone"
                        value={dataUser?.phone}
                        onChange={(e: any) =>
                          setDataUser((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                      />
                      <div className="form-text text-muted">
                        <a
                          style={{ display: "inline-block", marginTop: "5px" }}
                          href=""
                        >
                          Đổi số điện thoại
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mt-5">
                    <label
                      htmlFor="user_name"
                      className="col-md-2 offset-md-2 col-form-label"
                    >
                      Tên hiển thị
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="user_name"
                        name="name"
                        value={dataUser?.name}
                        placeholder="Ex: Nguyễn Văn A"
                        onChange={(e: any) =>
                          setDataUser((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="user_email"
                      className="col-md-2 offset-md-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="user_email"
                        name="email"
                        value=""
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="user_zalo"
                      className="col-md-2 offset-md-2 col-form-label"
                    >
                      Số Zalo
                    </label>
                    <div className="col-md-6">
                      <input
                        type="phone"
                        className="form-control"
                        id="user_zalo"
                        name="user_zalo"
                        value={dataUser?.zalo}
                        onChange={(e: any) =>
                          setDataUser((prev) => ({
                            ...prev,
                            zalo: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="user_facebook"
                      className="col-md-2 offset-md-2 col-form-label"
                    >
                      Facebook
                    </label>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="user_facebook"
                        name="user_facebook"
                        value=""
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-5">
                    <label
                      htmlFor="user_password"
                      className="col-md-2 offset-md-2 col-form-label"
                      style={{ paddingTop: "0" }}
                    >
                      Mật khẩu
                    </label>
                    <div className="col-md-6">
                      <a className="" href="">
                        Đổi mật khẩu
                      </a>
                    </div>
                  </div>

                  <div className="form-group row mt-5">
                    <label
                      htmlFor="user_avatar"
                      className="col-md-2 offset-md-2 col-form-label"
                      style={{ paddingTop: "0" }}
                    >
                      Ảnh đại diện
                    </label>
                    <div className="col-md-6">
                      <div className="user-avatar-upload-wrapper js-one-image-wrapper ">
                        <div className="user-avatar-inner js-one-image-inner">
                          <div
                            className="user-avatar-preview js-one-image-preview"
                            style={{
                              background: `url(${dataUser?.avatar}) center no-repeat`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                        </div>
                        <div className="user-avatar-upload clearfix">
                          <a className="remove-image js-remove-one-image">
                            Xóa hình này
                          </a>
                          <input
                            type="file"
                            className="btn-add-avatar js-change-image-file"
                          />
                          <input
                            type="hidden"
                            name="user_avatar"
                            className="js-input-value"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mt-5">
                    <label
                      htmlFor="user_email"
                      className="col-md-2 col-form-label"
                    ></label>
                    <div className="col-md-8">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg mb-2 btn-block"
                      >
                        Lưu &amp; Cập nhật
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="user_id" value="128152" />
                </form>
                <Support />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
