// LIBRARY
import moment from "moment";
import Link from "next/link";
import { NextPage } from "next";
import { useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { useState } from "react";
// APP
import { Support } from "../../containers/index";
import { GraphQLClient } from "graphql-request";
const postWithUserFilePath = require("../../graphql/user_post.graphql");

import {
  SystemNavMenu,
  SystemAside,
  SystemManagerPost,
} from "../../admin/index";
const ManagePost: NextPage = () => {
  const id = "ec962143-c5d5-41ef-b664-6a57b61c7258";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const dataPostWithUser = useQuery<any>(["postUser", id], () =>
    graphQLClient.request(postWithUserFilePath, { userId: id })
  )?.data?.userId?.response;

  const queryClient = useQueryClient();
  const dataUser =
    queryClient.getQueriesData<any>(["User"]).length > 0
      ? queryClient.getQueriesData<any>(["User"])[0][1]?.userId?.response
      : null;

  const checkStatus = (dateTime) =>
    moment(dateTime, "DD/MM/YYYY").isSameOrAfter(new Date().toDateString());

  return (
    <div className="desktop dashboard  loaded ready">
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
                      <Link href="/system">Quản lý</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Danh sách tin đăng
                    </li>
                  </ol>
                </nav>
                <SystemManagerPost data={dataUser?.post} />
                <Support />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagePost;
