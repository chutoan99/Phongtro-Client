import { Header, Container, Footer, NavBarMenu } from "../components/index";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const provinceQuery = gql`
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
`;
const priceQuery = gql`
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
`;
const categoryQuery = gql`
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
`;
const areaQuery = gql`
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
`;
const HomePage = () => {
  const router = useRouter();
  const graphQLClient = new GraphQLClient("http://localhost:8000/graphql");

  useQuery<any>(["Province"], () => graphQLClient.request(provinceQuery)).data
    ?.province?.response;

  useQuery<any>(["Price"], () => graphQLClient.request(priceQuery)).data?.price
    ?.response;

  useQuery<any>(["Menu"], () => graphQLClient.request(categoryQuery)).data
    ?.category?.response;

  useQuery<any>(["Area"], () => graphQLClient.request(areaQuery)).data?.area
    ?.response;
  const pageSize = 20;
  const pageNumber = 1;

  useQuery<any>(["Post", pageSize, pageNumber], () =>
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
    )
  )?.data?.post;

  useQuery<any>(["NewPost", pageSize, pageNumber], () =>
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
    )
  )?.data?.post;

  if (typeof window !== "undefined") {
    const storedToken = JSON.parse(localStorage.getItem("token"))?.token;
    if (storedToken) {
      const idUser = JSON.parse(localStorage.getItem("token"))?.id;
      if (idUser) {
        const graphQLClient = new GraphQLClient(
          "http://localhost:8000/graphql"
        );
        useQuery<any>(["user", idUser], async () =>
          graphQLClient.request(
            gql`
              query Query($userIdId: ID!) {
                userId(id: $userIdId) {
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
            { idUser }
          )
        );
      }
    } else {
      router.push("/login");
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
