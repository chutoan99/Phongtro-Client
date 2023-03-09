import { Header, Container, Footer, NavBarMenu } from "../components/index";
import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";

const RentalMotel = () => {
  const categoryCode = "CTPT";
  const graphQLClient = new GraphQLClient("http://localhost:8000/graphql");
  const pageSize = 20;

  const pageNumber = 1;
  const dataPost = useQuery<any>(
    ["Post", pageSize, pageNumber, categoryCode],
    async () =>
      graphQLClient.request(
        gql`
          query ($pageSize: Int, $pageNumber: Int, $categoryCode: String) {
            post(
              pageSize: $pageSize
              pageNumber: $pageNumber
              categoryCode: $categoryCode
            ) {
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
              }
            }
          }
        `,
        { pageSize, pageNumber, categoryCode }
      )
  );

  return (
    <div className="w-[100vw]  bg-[#f5f5f5]">
      <Header />
      <NavBarMenu path="rental-motel" />
      <Container />
      <Footer />
    </div>
  );
};
export default RentalMotel;
