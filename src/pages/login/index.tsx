// LIBRARY
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/router";

import { useQueryClient } from "react-query";
import { GraphQLClient } from "graphql-request";
// APP
const loginFilePath = require("../../graphql/mutation/login.graphql");
import InputLogin from "../../graphql/arguments/input_login.args";
import AuthLayout from "../../layouts/auth.layout";

const LoginPage = () => {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const queryClient = useQueryClient();
  const Router = useRouter();
  const [payload, setPayload] = useState<InputLogin>({
    phone: "",
    password: "",
  });
  const handleLogin = async () => {
    await queryClient.invalidateQueries("registerMutation");
    const data = await graphQLClient.request<any>(loginFilePath, {
      input: { ...payload },
    });
    if (data?.login?.token) {
      localStorage.setItem(
        "token",
        JSON.stringify({
          isLogin: true,
          token: data.login.token,
          id: data.login.response.id,
        })
      );
      Swal.fire("Oop !", data?.login?.msg, "success");
      Router.push("/");
    } else {
      Swal.fire("Oop !", data?.login?.msg, "error");
    }
  };

  return (
    <main id="main" style={{ height: "100vh" }}>
      <section className="section section-access">
        <div className="section-header">
          <h1 className="section-title big">Đăng nhập</h1>
        </div>
        <div className="section-content">
          <div className="form-access login-form js-login-form clearfix">
            <div className="form-group form-group-phone">
              <label htmlFor="inputPhoneEmailLogin">Số điện thoại</label>
              <input
                value={payload.phone}
                onChange={(e) =>
                  setPayload((prev) => {
                    return {
                      ...prev,
                      phone: e.target.value,
                    };
                  })
                }
                type="text"
                className="form-control"
                id="inputPhoneEmailLogin"
                placeholder=""
                name="loginname"
              />
            </div>
            <div className="form-group form-group-password">
              <label htmlFor="password">Mật khẩu</label>
              <input
                value={payload.password}
                onChange={(e) =>
                  setPayload((prev) => {
                    return {
                      ...prev,
                      password: e.target.value,
                    };
                  })
                }
                type="password"
                className="form-control"
                id="password"
                placeholder=""
                name="password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                name="wp-submit-login"
                className="btn btn-submit"
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
            </div>
            <div className="form-group clearfix">
              <Link href="#">Bạn quên mật khẩu?</Link>
              <Link style={{ float: "right" }} href="/register">
                Tạo tài khoản mới
              </Link>
            </div>
            <input
              type="hidden"
              name="redirect"
              value="https://phongtro123.com/"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
LoginPage.Layout = AuthLayout;
export default LoginPage;
