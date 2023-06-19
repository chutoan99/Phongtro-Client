import { Header, Container, Footer, NavBarMenu } from "../components/index";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import { useQuery } from "react-query";
const postFilePath = require("../graphql/post.graphql");
import InputPost from "../types/input_post.type";
import { useRouter } from "next/router";

const RentalApartment = () => {
  const url = "rental-apartment";
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
  useQuery<any>(["Post", payloadPost.pageNumber, url], async () =>
    graphQLClient.request(postFilePath, { input: { ...payloadPost } })
  );

  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="rental-apartment" />
      <Container path="rental-apartment" categoryCode="CTCH" />
      <Footer />
    </div>
  );
};

export default RentalApartment;
