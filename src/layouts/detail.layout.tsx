// LIBRARY
import React from "react";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
// APP
import { AreaHcm } from "../utils/area";
import InforLocal from "../models/InforLocal";
import { useQueryAreas } from "../hooks/useQueryAreas";
import { useQueryUserId } from "../hooks/useQueryUserId";
import { useQueryPrices } from "../hooks/useQueryPrices";
import { useQueryCategories } from "../hooks/useQueryCategories";
import { useQueryProvinces } from "../hooks/useQueryProvinces";
import { useQueryNewPosts } from "../hooks/useQueryNewPosts";
const postIdFilePath = require("../graphql/queries/postId.graphql");
import {
  AsideArea,
  AuthorAside,
  AsideNewPost,
  AsideNewHot,
  AsideSubLink,
} from "../components/index";
import {
  Header,
  WhyUs,
  Footer,
  Support,
  NavBarMenu,
} from "../containers/public/index";
import useTokenValidation from "../hooks/useTokenValidation.hook";
import InputNewPost from "../graphql/arguments/input_new_post.args";

export default function DetailLayout({ children }) {
  const router = useRouter();
  const { id } = router.query;

  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const dataPostId = useQuery<any>(["PostId", id], () =>
    graphQLClient.request(postIdFilePath, { postId: id })
  )?.data?.postId?.response;
  const dataUser: InforLocal = useTokenValidation();
  const payloadNewPost: InputNewPost = {
    pageSize: 10,
    pageNumber: 1,
  };

  useQueryNewPosts(payloadNewPost);
  useQueryProvinces();
  useQueryCategories();
  useQueryPrices();
  useQueryAreas();
  useQueryUserId(dataUser?.id);

  return (
    <div className="webpage">
      <Header />
      <NavBarMenu />
      <main id="man">
        <div className="container clearfix">
          <div id="breadcrumb">
            <ol className="clearfix">
              <li className="first link">
                <a href="" title="Cho thuê phòng trọ">
                  <span>Cho thuê phòng trọ</span>
                </a>
              </li>
              <li className="link link">
                <a href="" title="Cho thuê phòng trọ Hồ Chí Minh">
                  <span>Hồ Chí Minh</span>
                </a>
              </li>
              <li className="link link">
                <a href="" title="Cho thuê phòng trọ Quận Tân Phú">
                  <span>Quận Tân Phú</span>
                </a>
              </li>
              <li className="link last">
                <a href="" title="Cho thuê phòng trọ Phường Sơn Kỳ">
                  <span>Phường Sơn Kỳ</span>
                </a>
              </li>
            </ol>
          </div>
          {children}
          <aside id="aside">
            <AuthorAside item={dataPostId?.user} />
            <AsideNewPost />
            <AsideNewHot />
            <AsideArea item={AreaHcm} />
            <AsideSubLink />
          </aside>
        </div>
        <WhyUs />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
