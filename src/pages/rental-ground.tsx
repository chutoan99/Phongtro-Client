// LIBRARY
import { GraphQLClient } from "graphql-request";
import { useState } from "react";
import { useQuery } from "react-query";
// APP
const postFilePath = require("../graphql/post.graphql");
import InputPost from "../types/input_post.type";
import {
  Header,
  Container,
  Footer,
  NavBarMenu,
} from "../containers/public/index";

const RentalGround = () => {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const [payloadPost, setPayloadPost] = useState<InputPost>({
    pageSize: 20,
    pageNumber: 1,
    orderBy: "",
    direction: "",
    title: "",
    start: "",
    address: "",
    categoryCode: "CTMB",
    provinceCode: "",
    areaNumber: [],
    priceNumber: [],
  });
  useQuery<any>(["Post", payloadPost.pageNumber], async () =>
    graphQLClient.request(postFilePath, { input: { ...payloadPost } })
  );
  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="rental-ground" />
      <Container path="rental-ground" categoryCode="CTMB" />
      <Footer />
    </div>
  );
};
export default RentalGround;
