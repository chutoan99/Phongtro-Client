import { memo } from "react";
function UpdatePost({ setEdit }) {
  return (
    <div
      className="w-full h-full fixed top-0 left-0"
      style={{ backgroundColor: "rgba(0,0,0,.4)" }}
      onClick={() => setEdit(false)}
    >
      <div
        className="max-w-1100 bg-white mx-auto z-10 h-full p-[20px] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-center text-[1.5rem] font-bold uppercase my-[20px]">
          Chỉnh sửa tin đăng
        </h1>
      </div>
    </div>
  );
}
export default memo(UpdatePost);
