import { Header } from "../components/index";
import { useEffect, useState } from "react";
import { apiLogin } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { AppState } from "../app/store";
import { useRouter } from "next/router";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    await apiLogin({ phone, password }, dispatch, Router);
  };

  return (
    <div className="w-full h-full">
      <Header />
      <div className="bg-[#f5f5f5]">
        <div className="max-w-1100 h-[100vh] mx-[auto] pt-[20px] ">
          <div className="w-[460px] mx-[auto] p-[30px] bg-white rounded-[10px]">
            <div>
              <h1 className="text-xl">Đăng Nhập</h1>
            </div>
            <div className="my-[20px]">
              <label className="text-[15px] mb-[10px] capitalize">
                số điện thoại
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="bg-[#e8f0fe] w-[100%] h-[45px] p-[10px] rounded-[5px] focus:outline-none"
              />
            </div>
            <div className="my-[20px]">
              <label className="text-[15px] mb-[10px] capitalize">
                mật khẩu
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="bg-[#e8f0fe] w-[100%] h-[45px] p-[10px] rounded-[5px] focus:outline-none"
              />
            </div>
            <div className="w-[100%]  rounded-[5px] bg-[#1266dd] mb-[15px]">
              <button
                className="text-white h-[40px] w-full capitalize text-center"
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#1266dd] hover:text-red-500 cursor-pointer">
                Bạn quên mật khẩu?
              </span>
              <span className="text-[#1266dd]  hover:text-red-500 cursor-pointer">
                Tạo tài khoản mới
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
