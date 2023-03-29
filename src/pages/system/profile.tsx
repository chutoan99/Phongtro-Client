import { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Support,
  SystemAside,
  SystemNavMenu,
  SystemProfile,
} from "../../components/index";
import { gql, GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
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
const ProfilePage: NextPage = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const dataLocal: local = JSON.parse(localStorage.getItem("token"));
    if (!dataLocal?.token || dataLocal?.token === "undefined") {
      router.push("/login");
    } else {
      const fetchData = async () => {
        const response = await graphQLClient.request<any>(queryUser, {
          userId: dataLocal?.id,
        });
        setDataUser(response?.userId?.response);
      };
      fetchData();
    }
  }, []);

  return (
    <div className="desktop dashboard quan-ly dang-tin dang-tin-moi loaded ready">
      <div id="webpage" style={{ position: "relative" }}>
        <SystemNavMenu />
        <div
          className="container-fluid"
          style={{ position: "absolute", top: "45px" }}
        >
          <div className="row">
            <div className="d-flex">
              {dataUser && <SystemAside dataUser={dataUser} />}

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
                      Cập nhật thông tin cá nhân
                    </li>
                  </ol>
                </nav>
                <SystemProfile />
                <Support />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
