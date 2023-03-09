import Link from "next/link";
import { useQueryClient } from "react-query";
import { useAppSelector } from "../../app/hooks";
import { AppState } from "../../app/store";
import { menuManage } from "../../utils/menuUser";

function SystemAside() {
  const queryClient = useQueryClient();

  const dataUser =
    queryClient.getQueriesData<any>(["user"]).length > 0
      ? queryClient.getQueriesData<any>(["user"])[0][1]?.userId?.response
      : null;
  return (
    <nav className="col-lg-2 d-none d-lg-block bg-light sidebar">
      <div className="user_info">
        <Link href="#" className="clearfix">
          <div className="user_avatar">
            {dataUser?.avatar ? (
              <img src={dataUser?.avatar} alt="" />
            ) : (
              <img
                src="https://phongtro123.com/images/default-user.png"
                alt=""
              />
            )}
          </div>
          <div className="user_meta">
            <div className="inner">
              <div className="user_name">cu toan</div>
              <div
                className="user_verify"
                style={{ color: "#555", fontSize: "0.9rem" }}
              >
                0349324722
              </div>
            </div>
          </div>
        </Link>
        <ul>
          <li>
            <span>Mã thành viên:</span>{" "}
            <span style={{ fontWeight: "700" }}> 128152</span>
          </li>
          <li>
            <span>TK Chính:</span>{" "}
            <span style={{ fontWeight: "700" }}> 0 đ</span>
          </li>
        </ul>
        <a className="btn btn-warning btn-sm mr-1" href="">
          Nạp tiền
        </a>
        <a className="btn btn-danger btn-sm" href="">
          Đăng tin
        </a>
      </div>
      <ul className="nav nav-sidebar">
        {menuManage?.map((item: any, index: number) => (
          <li className="nav-item" key={index}>
            <a className="nav-link " href={item.path}>
              {item.icon}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default SystemAside;
