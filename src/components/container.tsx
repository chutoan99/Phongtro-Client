import { GraphQLClient } from "graphql-request";
import {
  Support,
  WhyUs,
  Search,
  Pagination,
  Post,
  AsideDirectoryRental,
  AsidePrice,
  AsideAcreage,
  AsideNewPost,
  AsideNewNews,
  AsideSubLink,
} from "./index";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
const postFilePath = require("../graphql/post.graphql");
import InputPost from "../types/input_post.type";
import { locationCity } from "../utils/constant";

interface NavBar {
  path: string;
  categoryCode: string;
}

const Container = ({ path, categoryCode }: NavBar) => {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const [payload, setPayload] = useState<InputPost>({
    pageSize: 15,
    pageNumber: 1,
    orderBy: "",
    direction: "",
    title: "",
    start: "",
    address: "",
    categoryCode: categoryCode,
    provinceCode: "",
    areaNumber: [],
    priceNumber: [],
  });
  const { data, isFetching, isLoading } = useQuery<any>(
    ["Post", payload.pageNumber, path],
    () => graphQLClient.request(postFilePath, { input: { ...payload } })
  );
  const dataPost = data?.post;
  const TOTAl_PAGE = useMemo(
    () => Math.ceil(+dataPost?.total / +dataPost?.pageSize),
    [dataPost]
  );
  useEffect(() => {
    console.log(payload, "payload");
  }, [payload]);

  return (
    <main id="main">
      <Search setPayload={setPayload} />
      <section className="section section-top-location">
        <div className="location-city clearfix">
          {locationCity.map((ele: any, index: number) => (
            <Link key={index} className={ele.class} href="" title={ele.title}>
              <div className="location-bg"></div>
              <span className="location-cat">
                <span className="location-name">{ele.des}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
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
            <Pagination setPageNumber={setPayload} totalPage={TOTAl_PAGE} />
          </div>
        </div>
        <div id="aside">
          <AsideDirectoryRental />
          <AsidePrice />
          <AsideAcreage />
          <AsideNewPost />
          <AsideNewNews />
          <AsideSubLink />
        </div>
      </div>
      <WhyUs />
      <Support />
    </main>
  );
};
export default Container;
