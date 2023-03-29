import { Header, Container, Footer, NavBarMenu } from "../components/index";
import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";

const Roommate = () => {
  const categoryCode = "TNOG";
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const pageSize = 20;

  const pageNumber = 1;
  useQuery<any>(["Post", pageNumber], async () =>
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
      <NavBarMenu path="roommate" />
      <Container />
      <Footer />
    </div>
  );
};
export default Roommate;
