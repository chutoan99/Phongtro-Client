// LIBRARY
import Link from "next/link";
// APP
import { menuManage2 } from "../../utils/menuUser";

function AdminSection() {
  return (
    <div className="list-group dashboard_list_menu mt-4">
      {menuManage2.map((ele: any, index: number) => (
        <Link className="list-group-item" href={ele?.path} key={index}>
          {ele.icon}
          {ele.text}
          <svg
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              marginTop: "-8px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      ))}
    </div>
  );
}
export default AdminSection;
