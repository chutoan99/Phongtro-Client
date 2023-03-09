import { useQueryClient } from "react-query";

function SystemProfile() {
  const queryClient = useQueryClient();
  const dataUser =
    queryClient.getQueriesData<any>(["user"]).length > 0
      ? queryClient.getQueriesData<any>(["user"])[0][1]?.userId?.response
      : null;

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Cập nhật thông tin cá nhân</h1>
      </div>
      <form className="js-form-submit-data" action="#">
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
              value="0349324722"
            />
            <div className="form-text text-muted">
              <a style={{ display: "inline-block", marginTop: "5px" }} href="">
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
              value={dataUser.name}
              placeholder="Ex: Nguyễn Văn A"
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
              value="0349324722"
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
                    background: `url(${dataUser.avatar}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="user-avatar-upload clearfix">
                <a className="remove-image js-remove-one-image">Xóa hình này</a>
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
    </>
  );
}
export default SystemProfile;
