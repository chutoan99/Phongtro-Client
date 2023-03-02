import { Header, NavBarMenu } from "../components/index";
import { useState } from "react";
import { apiLogin } from "../services/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";

const LoginPage: NextPage = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
  });

  const handleLogin = async () => {
    await apiLogin(payload, dispatch, Router);
  };

  return (
    <div id="webpage">
      <Header />
      <NavBarMenu />
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
                <a href="https://phongtro123.com/quen-mat-khau">
                  Bạn quên mật khẩu?
                </a>
                <Link style={{ float: "right" }} href="">
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
    </div>
  );
};

export default LoginPage;
