import { Header, Container, Footer, NavBarMenu } from "../components/index";
import { GraphQLClient, gql } from "graphql-request";
import { useQueries, useQuery } from "react-query";
import { useRouter } from "next/router";
interface local {
  id: any;
  isLogin: boolean;
  token: string;
}
const HomePage = () => {
  const router = useRouter();
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const pageSize = 15;
  const pageNumber = 1;
  useQueries([
    {
      queryKey: ["Province"],
      queryFn: () =>
        graphQLClient.request(gql`
          query {
            province {
              err
              msg
              response {
                code
                createdAt
                updatedAt
                id
                value
              }
            }
          }
        `),
    },
    {
      queryKey: ["Price"],
      queryFn: () =>
        graphQLClient.request(gql`
          query {
            price {
              err
              msg
              response {
                code
                createdAt
                id
                order
                updatedAt
                value
              }
            }
          }
        `),
    },
    {
      queryKey: ["Menu"],
      queryFn: () =>
        graphQLClient.request(gql`
          query {
            category {
              err
              msg
              response {
                code
                createdAt
                header
                path
                id
                subHeader
                value
                updatedAt
              }
            }
          }
        `),
    },
    {
      queryKey: ["Area"],
      queryFn: () =>
        graphQLClient.request(gql`
          query {
            area {
              err
              msg
              response {
                code
                createdAt
                id
                order
                updatedAt
                value
              }
            }
          }
        `),
    },
    {
      queryKey: ["Post", pageNumber],
      queryFn: () =>
        graphQLClient.request(
          gql`
            query ($pageSize: Int, $pageNumber: Int) {
              post(pageSize: $pageSize, pageNumber: $pageNumber) {
                err
                msg
                total
                pageNumber
                pageSize
                response {
                  address
                  id
                  attributes {
                    price
                    acreage
                    published
                  }
                  description
                  listImage {
                    postImg
                    total
                  }
                  start
                  title
                  updatedAt
                  user {
                    avatar
                    name
                    phone
                    updatedAt
                    zalo
                  }
                  userId
                }
              }
            }
          `,
          { pageSize, pageNumber }
        ),
    },
    {
      queryKey: ["NewPost"],
      queryFn: () =>
        graphQLClient.request(
          gql`
            query ($pageSize: Int, $pageNumber: Int) {
              post(pageSize: $pageSize, pageNumber: $pageNumber) {
                err
                msg
                total
                pageNumber
                pageSize
                response {
                  address
                  id
                  attributes {
                    price
                    acreage
                    published
                  }

                  listImage {
                    postImg
                  }
                  title
                  updatedAt
                }
              }
            }
          `,
          { pageSize, pageNumber }
        ),
    },
  ]);
  if (typeof window !== "undefined") {
    const data: local = JSON.parse(localStorage.getItem("token"));
    if (!data?.token || data?.token === "undefined") {
      router.push("/login");
    } else {
      useQuery<any>(["User", data?.id], async () =>
        graphQLClient.request(
          gql`
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
          `,
          { userId: data?.id }
        )
      );
    }
  }
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="index" />
      <Container />
      <Footer />
    </div>
  );
};

export default HomePage;
