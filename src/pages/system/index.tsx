// LIBRARY
import Link from "next/link";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gql, GraphQLClient } from "graphql-request";
// APP
import DataInfor from "../../types/dataInfor.type";
import ICONS from "../../../public/assets/icons";
import { Support } from "../../containers/index";
import { SystemAside, SystemSection, SystemNavMenu } from "../../admin/index";

const SystemPage: NextPage = () => {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const queryUser = gql`
    query Query($userId: ID!) {
      userId(id: $userId) {
        response {
          avatar
          createdAt
          id
          name
          phone
          zalo
          updatedAt
        }
        err
        msg
      }
    }
  `;
  const router = useRouter();
  const [dataUser, setDataUser] = useState<any>();

  useEffect(() => {
    const data: DataInfor = JSON.parse(localStorage.getItem("token"));
    if (!data?.token || data?.token === "undefined") {
      router.push("/login");
    } else {
      const fetchData = async () => {
        const response = await graphQLClient.request<any>(queryUser, {
          userId: data?.id,
        });
        setDataUser(response?.userId?.response);
      };
      fetchData();
    }
  }, []);
  return (
    <div className="desktop dashboard loaded ready">
      <div id="webpage" style={{ position: "relative" }}>
        {dataUser && <SystemNavMenu />}
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "45px" }}
        >
          <div className="row">
            <div className="d-flex">
              <SystemAside dataUser={dataUser} />
              <main role="main" className="ml-sm-auto col-lg-10">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Phongtro123.com</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="">Quản lý</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Đăng tin mới
                    </li>
                  </ol>
                </nav>
                <Link
                  className="btn btn-danger btn-block d-flex align-items-center"
                  href="/system/create"
                  style={{
                    backgroundColor: "#dc3545",
                    borderColor: "#dc3545",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  {ICONS.ICON_CREATE}
                  Đăng tin mới
                </Link>
                <div>
                  <SystemSection />
                </div>
                <Support />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SystemPage;
