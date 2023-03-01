import { AppState } from "../app/store";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { authActions } from "../redux/auth.slice";
import menuManage from "../utils/menuManage";

const Header: NextPage = () => {
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state: AppState) => state.user);
  const { isLogin } = useAppSelector((state: AppState) => state.auth.login);
  const [isDropDown, setIsDropDown] = useState(false);
  const handleMenuManage = (id) => {
    if (id === 1) {
      Router.push(`${menuManage[0].path}`);
    } else if (id === 2) {
      Router.push(`${menuManage[1].path}`);
    } else if (id === 3) {
      Router.push(`${menuManage[2].path}`);
    } else if (id === 4) {
      dispatch(authActions.logoutSuccess());
      localStorage.setItem(
        "token",
        JSON.stringify({ isLogin: false, token: null })
      );
    }
  };
  return (
    <div className="container container-header clearfix">
      <Link
        id="top-logo"
        href="/"
        title="cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ"
      >
        cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ
      </Link>
      <div className="user-welcome clearfix js-reload-html-header">
        {isLogin && (
          <Link className="welcome-text" href="" rel="nofollow">
            <Image
              src={data.avatar}
              alt="Avatar"
              width={40}
              height={40}
              style={{
                border: "1px solid #ddd",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "1.2rem",
                  marginBottom: "3px",
                  maxWidth: "300px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Xin chào, <strong> {data?.name}</strong>
              </span>
              <span style={{ fontSize: "0.9rem" }}>
                Mã tài khoản: <strong> {data?.id?.slice(0, 15) + `...`}</strong>
                . TK Chính:
                <strong>0 VNĐ</strong>
              </span>
            </div>
          </Link>
        )}

        <Link rel="nofollow" className="btn" href="">
          <i className="icon heart size-18"></i> Yêu thích{" "}
          <span className="number-count js-save-post-total">1</span>
        </Link>
        {!isLogin ? (
          <>
            <a rel="nofollow" className="btn" href="/login">
              <i className="icon register"></i> Đăng nhập
            </a>
            <a rel="nofollow" className="btn" href="/register">
              <i className="icon login"></i> Đăng ký
            </a>
          </>
        ) : (
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setIsDropDown(!isDropDown)}
            >
              <i className="icon dashboard"></i> Quản lý tài khoản
            </button>
            {isDropDown ? (
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {menuManage.map((item: any, index: number) => (
                  <li key={index}>
                    <Link
                      onClick={() => handleMenuManage(item.id)}
                      className="dropdown-menu-item dang-tin"
                      rel="nofollow"
                      href=""
                      title="Đăng tin cho thuê"
                    >
                      <i></i> Đăng tin cho thuê
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
        <Link rel="nofollow" className="btn btn-add-post" href="/system/">
          Đăng tin mới <i></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
