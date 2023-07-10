// LIBRARY
import { useState } from "react";
function SystemHeader({ text, alert, type }) {
  const [isShowMenu1, setIsShowMenu1] = useState(false);
  const [isShowMenu2, setIsShowMenu2] = useState(false);
  return (
    <>
      <div className="w-full h-[42px] bg-[#e9ecef] items-center flex pl-[10px] rounded-[0.25rem] mt-[30px]">
        <span className="text-[1.1rem] text-blue-600">
          Phongtro123.com / Quản lý /
          <span className="text-[#6c757d]">{text}</span>
        </span>
      </div>
      <div className="mt-[20px] flex justify-between">
        <h1 className="font-extrabold leading-[1.2rem] text-[35px]">{text}</h1>
        {type && (
          <div className="flex gap-[10px]">
            <div className="relative">
              <button
                style={{ border: "1px solid #6c757d" }}
                className="p-[10px] rounded-[5px] hover:bg-[#6c757d] hover:text-white"
                onClick={() => setIsShowMenu1(!isShowMenu1)}
              >
                Lọc theo loại VIP
                <i className="fa-sharp fa-solid fa-caret-down  text- ml-[5px]"></i>
              </button>
              {isShowMenu1 && (
                <ul
                  className="absolute top-[105%] right-0 bg-white w-[120%] z-10 rounded-[5px]"
                  style={{ border: "1px solid rgba(0,0,0,.15)" }}
                >
                  <li className="p-[10px] text-[1.1rem]">Tin Hot</li>
                  <li className="p-[10px] text-[1.1rem]">Tin VIP 30</li>
                  <li className="p-[10px] text-[1.1rem]">Tin VIP 20</li>
                  <li className="p-[10px] text-[1.1rem]">Tin VIP 10</li>
                  <li className="p-[10px] text-[1.1rem]">Tin thường</li>
                </ul>
              )}
            </div>
            <div className="relative">
              <button
                style={{ border: "1px solid #6c757d" }}
                className="p-[10px]  rounded-[5px] hover:bg-[#6c757d] hover:text-white"
                onClick={() => setIsShowMenu2(!isShowMenu2)}
              >
                Lọc theo trạng thái
                <i className="fa-sharp fa-solid fa-caret-down  ml-[5px]"></i>
              </button>{" "}
              {isShowMenu2 && (
                <ul
                  className="absolute top-[105%] right-0 bg-white w-[120%] z-10 rounded-[5px]"
                  style={{ border: "1px solid rgba(0,0,0,.15)" }}
                >
                  <li className="p-[10px] text-[1.1rem]">Tin đang hiển thị</li>
                  <li className="p-[10px] text-[1.1rem]">Tin hết hạn</li>
                  <li className="p-[10px] text-[1.1rem]">Tin đang ẩn</li>
                </ul>
              )}
            </div>
            <span className="p-[10px] bg-[#dc3545] rounded-[5px] px-[15px] text-white">
              Đăng tin mới
            </span>
          </div>
        )}
      </div>

      <hr className="my-[20px]"></hr>
      {alert && (
        <div
          className=" bg-[#f8d7da] p-[12px] rounded-[0.25rem]"
          style={{ borderColor: "#f5c6cb" }}
        >
          <p className="text-[#721c24]">
            Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức năng
            ĐẨY TIN / GIA HẠN / NÂNG CẤP VIP trong mục QUẢN LÝ TIN ĐĂNG để làm
            mới, đẩy tin lên cao thay vì đăng tin mới. Tin đăng trùng nhau sẽ
            không được duyệt.
          </p>
        </div>
      )}
    </>
  );
}
export default SystemHeader;
