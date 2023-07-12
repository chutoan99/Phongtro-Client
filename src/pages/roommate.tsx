// LIBRARY
import { useState } from "react";
import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
// APP
const queryFilePath = require("../graphql/post.graphql");
import InputPost from "../types/input_post.type";
import {
  Header,
  Container,
  Footer,
  NavBarMenu,
} from "../containers/public/index";

const Roommate = () => {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const [payloadPost, setPayloadPost] = useState<InputPost>({
    pageSize: 20,
    pageNumber: 1,
    orderBy: "",
    direction: "",
    title: "",
    start: "",
    address: "",
    categoryCode: "TNOG",
    provinceCode: "",
    areaNumber: [],
    priceNumber: [],
  });

  useQuery<any>(
    ["Post", payloadPost.pageNumber, payloadPost.categoryCode],
    async () =>
      graphQLClient.request(queryFilePath, { input: { ...payloadPost } })
  );

  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="roommate" />
      <Container path="roommate" categoryCode="TNOG" />
      <Footer />
    </div>
  );
};

export default Roommate;
