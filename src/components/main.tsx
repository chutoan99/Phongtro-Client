import { Aside } from "./index";
import { Pagination, Post } from "./index";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";
import { useEffect, useState, useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
function Main() {
  const pageSize = 20;
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(1);
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const { data, isFetching, isLoading } = useQuery<any>(
    ["Post", pageNumber],
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
        { pageSize, pageNumber }
      )
  );
  const dataPost = data?.post;
  const TOTAl_PAGE = useMemo(
    () => Math.ceil(+dataPost?.total / +dataPost?.pageSize),
    [dataPost]
  );
  useEffect(() => {
    queryClient.invalidateQueries("Post");
  }, [pageNumber]);
  return (
    <div className="container clearfix">
      <div id="left-col">
        <section className="section section-post-listing">
          <div className="section-header">
            <span className="section-title">Danh sách tin đăng</span>
          </div>
          <div className="post-sort">
            <span>Sắp xếp: </span>
            <Link className="active" href="">
              Mặc định
            </Link>
            <Link className="" href="">
              Mới nhất
            </Link>
            <Link className="" href="">
              Có video
            </Link>
          </div>

          <ul className="post-listing clearfix">
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              <Post dataPost={dataPost} />
            )}
          </ul>
        </section>
        <div className="flex items-center justify-center">
          <Pagination setPageNumber={setPageNumber} totalPage={TOTAl_PAGE} />
        </div>
      </div>
      <div id="aside">
        <Aside />
      </div>
    </div>
  );
}
export default Main;
