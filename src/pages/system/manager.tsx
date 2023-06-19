import { useEffect, useState } from "react";
import { Support, SystemAside, SystemNavMenu } from "../../components/index";
import moment from "moment";
import { NextPage } from "next";
import SystemManager from "../../components/system/system-manager";
import Link from "next/link";
import { useRouter } from "next/router";
import { gql, GraphQLClient } from "graphql-request";
import DataInfor from "../../types/dataInfor.type";

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
        post {
          address
          areaCode
          areaNumber
          title
          categoryCode
          listImage {
            postImg
          }
          attributes {
            acreage
            createdAt
            hashtag
            id
            price
            published
            updatedAt
          }
          overviews {
            area
            bonus
            code
            created
            createdAt
            expired
            id
            target
            type
            updatedAt
          }
        }
      }
      err
      msg
    }
  }
`;

const ManagePost: NextPage = () => {
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

  const checkStatus = (dateTime) =>
    moment(dateTime, "DD/MM/YYYY").isSameOrAfter(new Date().toDateString());

  return (
    <div className="desktop dashboard quan-ly dang-tin dang-tin-moi loaded ready">
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
                <SystemManager data={dataUser?.post} />
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
