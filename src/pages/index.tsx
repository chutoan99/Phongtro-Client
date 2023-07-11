// LIBRARY
import { GraphQLClient } from "graphql-request";
import { useQueries, useQuery } from "react-query";
import { useRouter } from "next/router";
// APP
import InputNewPost from "../types/input_newPost.type";
import DataInfor from "../types/dataInfor.type";
import { Header, Container, Footer, NavBarMenu } from "../containers/index";
const provinceFilePath = require("../graphql/province.graphql");
const areaFilePath = require("../graphql/area.graphql");
const priceFilePath = require("../graphql/price.graphql");
const categoryFilePath = require("../graphql/category.graphql");
const newPostFilePath = require("../graphql/newPost.graphql");
const userIdFilePath = require("../graphql/userId.graphql");

const HomePage = () => {
  const router = useRouter();
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const payloadNewPost: InputNewPost = {
    pageSize: 10,
    pageNumber: 1,
  };

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
    {
      queryKey: ["NewPost"],
      queryFn: () =>
        graphQLClient.request(newPostFilePath, {
          input: { ...payloadNewPost },
        }),
    },
    {
      queryKey: ["NewPost"],
      queryFn: () =>
        graphQLClient.request(newPostFilePath, {
          input: { ...payloadNewPost },
        }),
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
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="index" />
      <Container path="index" categoryCode="" />
      <Footer />
    </div>
  );
};

export default HomePage;
