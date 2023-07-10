import { useEffect, useState } from "react";
import { Support } from "../../containers/index";
import moment from "moment";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { gql, GraphQLClient } from "graphql-request";
import DataInfor from "../../types/dataInfor.type";
const postWithUserFilePath = require("../../graphql/user_post.graphql");
const userIdFilePath = require("../../graphql/userId.graphql");
import { useQuery } from "react-query";

import {
  SystemNavMenu,
  SystemAside,
  SystemManagerPost,
} from "../../admin/index";
const ManagePost: NextPage = () => {
  const router = useRouter();
  const id = "ec962143-c5d5-41ef-b664-6a57b61c7258";
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const dataPostWithUser = useQuery<any>(["postUser", id], () =>
    graphQLClient.request(postWithUserFilePath, { userId: id })
  )?.data?.userId?.response;
  const [dataUser, setDataUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const dataLocal: DataInfor = JSON.parse(localStorage.getItem("token"));
    if (!dataLocal?.token || dataLocal?.token === "undefined") {
      router.push("/login");
    } else {
      const fetchData = async () => {
        const response = await graphQLClient.request<any>(userIdFilePath, {
          userId: dataLocal?.id,
        });
        setDataUser(response?.userId?.response);
      };
      fetchData();
    }
  }, []);

  const checkStatus = (dateTime) =>
    moment(dateTime, "DD/MM/YYYY").isSameOrAfter(new Date().toDateString());

  return (
    <div className="desktop dashboard  loaded ready">
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
