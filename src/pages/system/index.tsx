import { NextPage } from "next";
import {
  SystemAside,
  SystemMain,
  SystemNavMenu,
  SystemSection,
} from "../../components/index";
import { useState, useEffect } from "react";
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
const SystemPage: NextPage = () => {
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
              <SystemMain>
                <SystemSection />
              </SystemMain>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SystemPage;
