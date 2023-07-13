// LIBRARY
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { useQueryClient } from "react-query";
// APP
const registerFilePath = require("../../graphql/mutation/register.graphql");
import InputRegister from "../../graphql/arguments/input_register.args";
import AuthLayout from "../../layouts/auth.layout";

export default function RegisterPage() {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const queryClient = useQueryClient();
  const Router = useRouter();
  const [payload, setPayload] = useState<InputRegister>({
    name: "",
    phone: "",
    password: "",
  });

  const handleRegister = async () => {
    await queryClient.invalidateQueries("registerMutation");
    const data = await graphQLClient.request<any>(registerFilePath, {
      input: { ...payload },
    });
    if (data?.register?.token) {
      Swal.fire("Oop !", data?.register?.msg, "success");
      Router.push("/login");
    } else {
      Swal.fire("Oop !", data?.register?.msg, "error");
    }
  };

  return (
    <main id="main" style={{ height: "100vh" }}>
      <section className="section section-access">
        <div className="section-header">
          <h1 className="section-title big">Tạo tài khoản mới</h1>
        </div>
        <div className="section-content">
          <div className="form-access register-form js-register-form clearfix">
            <div className="form-group form-group-fullname">
              <label htmlFor="inputFullName">Họ tên</label>
              <input
                type="text"
                className="form-control"
                value={payload.name}
                onChange={(e) => {
                  setPayload((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  });
                }}
                min-length="3"
                id="inputFullName"
                name="fullname"
                data-msg="Không được phép để trống"
              />
            </div>
            <div className="form-group form-group-phone">
              <label htmlFor="inputPhone">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                value={payload.phone}
                onChange={(e) =>
                  setPayload((prev) => {
                    return {
                      ...prev,
                      phone: e.target.value,
                    };
                  })
                }
                id="inputPhone"
                name="phone"
              />
            </div>
            <div className="form-group form-group-password">
              <label htmlFor="password">Tạo mật khẩu</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={payload.password}
                onChange={(e) => {
                  setPayload((prev) => {
                    return {
                      ...prev,
                      password: e.target.value,
                    };
                  });
                }}
              />
            </div>

            <div className="form-group">
              <button
                name="wp-submit-register"
                className="btn btn-submit"
                onClick={handleRegister}
              >
                Tạo tài khoản
              </button>
            </div>
            <div className="form-group">
              <p style={{ padding: "5px 0" }}>
                Bấm vào nút đăng ký tức là bạn đã đồng ý với
                <Link href="" target="_blank">
                  quy định sử dụng
                </Link>
                của chúng tôi
              </p>
              <p style={{ padding: "5px 0" }}>
                Bạn đã có tài khoản?{" "}
                <Link className="link" href="/login">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
            <input type="hidden" name="redirect" value="" />
          </div>
        </div>
      </section>
    </main>
  );
}

RegisterPage.Layout = AuthLayout;
