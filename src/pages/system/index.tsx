// LIBRARY
import Link from "next/link";
import { NextPage } from "next";
import { useQueryClient, useQueries, useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
// APP
import ICONS from "../../../public/assets/icons";
import { Support } from "../../containers/index";
import { SystemAside, SystemSection, SystemNavMenu } from "../../admin/index";
import DataInfor from "../../types/dataInfor.type";
const provinceFilePath = require("../../graphql/province.graphql");
const areaFilePath = require("../../graphql/area.graphql");
const priceFilePath = require("../../graphql/price.graphql");
const categoryFilePath = require("../../graphql/category.graphql");
const userIdFilePath = require("../../graphql/userId.graphql");
const SystemPage: NextPage = () => {
  const queryClient = useQueryClient();
  const dataUser =
    queryClient.getQueriesData<any>(["User"]).length > 0
      ? queryClient.getQueriesData<any>(["User"])[0][1]?.userId?.response
      : null;

  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  useQueries([
    {
      queryKey: ["Province"],
      queryFn: () => graphQLClient.request(provinceFilePath),
    },
    {
      queryKey: ["Price"],
      queryFn: () => graphQLClient.request(priceFilePath),
    },
    {
      queryKey: ["Category"],
      queryFn: () => graphQLClient.request(categoryFilePath),
    },
    {
      queryKey: ["Area"],
      queryFn: () => graphQLClient.request(areaFilePath),
    },
  ]);

  if (typeof window !== "undefined") {
    const data: DataInfor = JSON.parse(localStorage.getItem("token"));
    useQuery<any>(["User", data?.id], async () =>
      graphQLClient.request(userIdFilePath, {
        userId: data?.id,
      })
    );
  }
  return (
    <div className="desktop dashboard loaded ready">
      <div id="webpage" style={{ position: "relative" }}>
        <SystemNavMenu />
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
