import { note } from "../../utils/menuUser";

function SystemNote() {
  return (
    <div className="gap-[30px] grid">
      <div className="w-full bg-[#fff3cd] rounded-[5px]">
        <div className="p-[9px]  grid gap-[15px]">
          <h2 className="text-[#856404] text-[1.5rem]">Lưu ý khi đăng tin</h2>
          <ul className="gap-[10px] grid">
            {note?.map((item, index) => (
              <li
                key={index}
                className="text-[#856404] ml-[20px] text-[1.1rem] leading-[25px]"
                style={{ listStyleType: "square" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SystemNote;
