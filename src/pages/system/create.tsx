import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SystemAside,
  SystemNavMenu,
  SystemContent,
  Support,
} from "../../components/index";
import { useRouter } from "next/router";
import { gql, GraphQLClient } from "graphql-request";
interface local {
  id: any;
  isLogin: boolean;
  token: string;
}
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
const CreatePost: NextPage = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<any>();

  useEffect(() => {
    const data: local = JSON.parse(localStorage.getItem("token"));
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
    <>
      <div className="desktop dashboard quan-ly dang-tin dang-tin-moi loaded ready">
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Đăng tin mới
                      </li>
                    </ol>
                  </nav>
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 className="h1">Đăng tin mới</h1>
                  </div>
                  <SystemContent />
                  <Support />
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
