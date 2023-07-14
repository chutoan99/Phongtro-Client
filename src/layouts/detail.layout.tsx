// LIBRARY
import React from "react";
// APP
import {
  Header,
  WhyUs,
  Footer,
  Support,
  NavBarMenu,
  AsideDetail,
} from "../containers/public";
import Link from "next/link";

export default function DetailLayout({ children }) {
  return (
    <div className="webpage">
      <Header />
      <NavBarMenu />
      <main id="man">
        <div className="container clearfix">
          <div id="breadcrumb">
            <ol className="clearfix">
              <li className="first link">
                <Link href="#" title="Cho thuê phòng trọ">
                  <span>Cho thuê phòng trọ</span>
                </Link>
              </li>
              <li className="link link">
                <Link href="#" title="Cho thuê phòng trọ Hồ Chí Minh">
                  <span>Hồ Chí Minh</span>
                </Link>
              </li>
              <li className="link link">
                <Link href="#" title="Cho thuê phòng trọ Quận Tân Phú">
                  <span>Quận Tân Phú</span>
                </Link>
              </li>
              <li className="link last">
                <Link href="#" title="Cho thuê phòng trọ Phường Sơn Kỳ">
                  <span>Phường Sơn Kỳ</span>
                </Link>
              </li>
            </ol>
          </div>
          {children}
          <AsideDetail />
        </div>
        <WhyUs />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
