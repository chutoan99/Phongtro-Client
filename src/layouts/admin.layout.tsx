// LIBRARY
import { useQueryClient, useQueries, useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
// APP
import { AdminAside, AdminNav } from "../admin/index";
import DataInfor from "../types/dataInfor.type";

const provinceFilePath = require("../graphql/province.graphql");
const areaFilePath = require("../graphql/area.graphql");
const priceFilePath = require("../graphql/price.graphql");
const categoryFilePath = require("../graphql/category.graphql");
const userIdFilePath = require("../graphql/userId.graphql");

export default function AdminLayout({ children }) {
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
        <AdminNav />
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "45px" }}
        >
          <div className="row">
            <div className="d-flex">
              <AdminAside dataUser={dataUser} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
