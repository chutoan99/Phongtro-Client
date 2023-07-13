// LIBRARY
import Link from "next/link";
import { useQuery, useQueryClient } from "react-query";
import { useState, useMemo, useEffect } from "react";
// APP
import { Search } from "./index";
import { Support, WhyUs } from "./index";
import { locationCity } from "../../utils/constant";
import InputPost from "../../graphql/arguments/input_post.args";
import { useQueryPosts } from "../../hooks/useQueryPost";
import { queryPosts } from "../../services/post/post.service";
import {
  Pagination,
  Post,
  AsideDirectoryRental,
  AsidePrice,
  AsideAcreage,
  AsideNewPost,
  AsideNewNews,
  AsideSubLink,
} from "../../components/index";

interface NavBar {
  categoryCode: string;
}

const Container = ({ categoryCode }: NavBar) => {
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
  const queryClient = useQueryClient();

  const queryKey = ["Posts", { ...payload }];
  const queryFn = async () => {
    const responseData = await queryPosts(payload);
    return responseData;
  };
  const { data, isLoading, isFetching } = useQuery(queryKey, queryFn);
  const {} = useQueryPosts(payload);

  const TOTAl_PAGE = 30;
  // useMemo(() => Math.ceil(+data?.length / +payload.pageSize), [data]);
  const onSearch = () => {
    queryClient.invalidateQueries(queryKey);
    queryClient.refetchQueries(queryKey);
  };
  return (
    <main id="main">
      <Search setPayload={setPayload} onSearch={onSearch} />
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
              <Link className="active" href="#">
                Mặc định
              </Link>
              <Link className="" href="#">
                Mới nhất
              </Link>
              <Link className="" href="#">
                Có video
              </Link>
            </div>

            <ul className="post-listing clearfix">
              {isLoading ? (
                <span className="loader"></span>
              ) : (
                <Post data={data} />
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
