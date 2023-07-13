// LIBRARY
import React from "react";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
// APP
import { AreaHcm } from "../utils/area";
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
import { useQueryPostId } from "../hooks/useQueryPostId";

export default function DetailLayout({ children }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isFetching } = useQueryPostId(id);
  console.log(data, "datadatadata");
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
            <AuthorAside item={data?.user} />
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
