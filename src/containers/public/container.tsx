// LIBRARY
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
// APP
import { locationCity } from "../../utils/constant";
import { Support, WhyUs } from "./index";
import InputPost from "../../graphql/arguments/input_post.args";
import {
  Search,
  Pagination,
  Post,
  AsideDirectoryRental,
  AsidePrice,
  AsideAcreage,
  AsideNewPost,
  AsideNewNews,
  AsideSubLink,
} from "../../components/index";
import { useQueryPosts } from "../../hooks/useQueryPost";

interface NavBar {
  path: string;
  categoryCode: string;
}

const Container = ({ path, categoryCode }: NavBar) => {
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
  const { responseData, total, isLoading, isFetching, pageSize } =
    useQueryPosts(payload);
  const TOTAl_PAGE = useMemo(
    () => Math.ceil(+total / +pageSize),
    [responseData]
  );

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
                <Post
                  currentPage={payload.pageNumber}
                  path="path"
                  categoryCode="categoryCode"
                />
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
