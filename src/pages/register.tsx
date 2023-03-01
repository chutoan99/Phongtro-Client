import { Header } from "../components/index";
import { useState } from "react";
import { apiRegister } from "../services/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { NextPage } from "next";
const RegisterPage: NextPage = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await apiRegister({ name, phone, password }, dispatch, Router);
  };
  return (
    <div className="w-full h-full">
      <Header />
      <div className="bg-[#f5f5f5]">
        <div className="max-w-1100  h-[100vh] mx-[auto] pt-[20px] ">
          <div className="w-[600px] mx-[auto] p-[30px] bg-white rounded-[10px]">
            <div>
              <h1 className="text-xl">Đăng Ký</h1>
            </div>
            <div className="my-[20px]">
              <label className="text-[15px] mb-[10px] capitalize">
                họ và tên
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="bg-[#e8f0fe] w-[100%] h-[45px] p-[10px] rounded-[5px] focus:outline-none"
              />
            </div>
            <div className="my-[20px]">
              <label className="text-[15px] mb-[10px] capitalize">
                số điện thoại
              </label>
              <input
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                className="bg-[#e8f0fe] w-[100%] h-[45px] p-[10px] rounded-[5px] focus:outline-none"
              />
            </div>
            <div className="w-[100%]  rounded-[5px] bg-[#1266dd] mb-[15px]">
              <button
                className="text-white h-[40px] w-full capitalize text-center"
                onClick={handleRegister}
                type="submit"
              >
                tạo tài khoản
              </button>
            </div>
            <div className="">
              <label className="mb-[20px]">
                Bấm vào nút đăng ký tức là bạn đã đồng ý với
                <span className="text-[#1266dd] hover:text-red-500 cursor-pointer mx-1">
                  quy định sử dụng
                </span>
                của chúng tôi
              </label>
              <label>
                Bạn đã có tài khoản?
                <span className="text-[#1266dd]  hover:text-red-500 cursor-pointer mx-1">
                  Đăng nhập ngay
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
