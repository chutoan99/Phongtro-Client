// LIBRARY
import React from "react";
import Slider from "react-slick";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
// APP
import { AreaHcm } from "../../utils/area";
const postIdFilePath = require("../../graphql/postId.graphql");
import {
  AsideArea,
  AuthorAside,
  AsideNewPost,
  AsideNewHot,
  AsideSubLink,
} from "../../components/index";
import {
  Header,
  WhyUs,
  Footer,
  Support,
  NavBarMenu,
} from "../../containers/public/index";
const DetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);
  const dataPostId = useQuery<any>(["PostId", id], () =>
    graphQLClient.request(postIdFilePath, { postId: id })
  )?.data?.postId?.response;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="webpage">
      <Header />
      <NavBarMenu path="index" />
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
          <div id="left-col">
            <article className="the-post tin-vip vipnoibat">
              <div className="post-images">
                <div className="images-swiper-container swiper-container-horizontal">
                  <Slider {...settings}>
                    {dataPostId?.listImage?.image &&
                      JSON.parse(dataPostId?.listImage?.image)?.map(
                        (item: any, index: number) => (
                          <div className="swiper-slide" key={index}>
                            <img src={item} alt="img" />
                          </div>
                        )
                      )}
                  </Slider>
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button
                      type="button"
                      data-role="none"
                      className="slick-arrow slick-prev"
                      style={{ display: "block" }}
                    >
                      Previous
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: "5.03316e+08px",
                          opacity: 1,
                          transform: "translate3d(-3.35544e+07px, 0px, 0px)",
                        }}
                      >
                        <div
                          data-index="-1"
                          className="slick-slide slick-cloned"
                          aria-hidden="true"
                          style={{ width: "3.35544e+07px" }}
                        >
                          <div>
                            <div
                              className="swiper-slide"
                              style={{
                                width: "100%",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/13/shophouse-sapphire-2-ngoquocdungcom-_1660356471.jpg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-role="none"
                      className="slick-arrow slick-next"
                      style={{ display: "block" }}
                    >
                      Next
                    </button>
                    <ul className="slick-dots" style={{ display: "block" }}>
                      <li className="slick-active">
                        <button>1</button>
                      </li>
                      <li className="">
                        <button>2</button>
                      </li>
                      <li className="">
                        <button>3</button>
                      </li>
                      <li className="">
                        <button>4</button>
                      </li>
                      <li className="">
                        <button>5</button>
                      </li>
                      <li className="">
                        <button>6</button>
                      </li>
                      <li className="">
                        <button>7</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <header className="page-header">
                <h1 className="page-h1">
                  <span
                    className="star star-5"
                    style={{ float: "left" }}
                  ></span>
                  <a
                    style={{ color: "#E13427" }}
                    href=""
                    title="CHO THUÊ PHÒNG TRỌ MỚI CHÍNH CHỦ, GIẢM GIÁ, QUẬN TÂN PHÚ - GẦN BÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THỰC PHẨM"
                  >
                    {dataPostId?.title}
                  </a>
                </h1>
                <div className="clearfix"></div>
                <p className="margin-bottom: 10px;">
                  Chuyên mục:{" "}
                  <a
                    style={{ textDecoration: "underline" }}
                    title="Phòng trọ Quận Tân Phú"
                    href=""
                  >
                    <strong>{dataPostId?.overviews?.area}</strong>
                  </a>
                </p>
                <address className="post-address">
                  Địa chỉ:{dataPostId?.address}
                </address>
                <div className="post-attributes">
                  <div className="item price">
                    <i></i>
                    <span
                      style={{
                        color: "#16c784",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      {dataPostId?.attributes?.price}
                    </span>
                  </div>
                  <div className="item acreage">
                    <i></i>
                    <span>{dataPostId?.attributes?.acreage}</span>
                  </div>
                  <div className="item published">
                    <i></i>
                    <span title="Thứ 5, 08:31 23/02/2023">
                      {dataPostId?.attributes?.published}
                    </span>
                  </div>
                  <div className="item hashtag">
                    <i></i>
                    <span>{dataPostId?.attributes?.hashtag}</span>
                  </div>
                </div>
              </header>

              <section className="section post-main-content">
                <div className="section-header">
                  <h2 className="section-title">Thông tin mô tả</h2>
                </div>
                <div className="section-content">
                  {dataPostId?.description &&
                    JSON.parse(dataPostId?.description)?.map(
                      (ele: any, index: number) => <p key={index}>{ele}</p>
                    )}
                </div>
              </section>

              <section className="section post-overview">
                <div className="section-header">
                  <h3 className="section-title">Đặc điểm tin đăng</h3>
                </div>
                <div className="section-content">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="name">Mã tin:</td>
                        <td>{dataPostId?.overviews?.code}</td>
                      </tr>
                      <tr>
                        <td className="name">Khu vực</td>
                        <td>{dataPostId?.overviews?.area}</td>
                      </tr>
                      <tr>
                        <td className="name">Loại tin rao:</td>
                        <td>{dataPostId?.overviews?.type}</td>
                      </tr>
                      <tr>
                        <td className="name">Đối tượng thuê:</td>
                        <td>{dataPostId?.overviews?.target}</td>
                      </tr>
                      <tr>
                        <td className="name">Gói tin:</td>
                        <td>
                          <span style={{ color: "#E13427" }}>
                            {dataPostId?.overviews?.bonus}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">Ngày đăng:</td>
                        <td>
                          <time title="Thứ 5, 08:31 23/02/2023">
                            {dataPostId?.overviews?.created}
                          </time>
                        </td>
                      </tr>
                      <tr>
                        <td className="name">Ngày hết hạn:</td>
                        <td>
                          <time title="Thứ 6, 08:31 10/03/2023">
                            {dataPostId?.overviews?.expired}
                          </time>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="section post-contact">
                <div className="section-header">
                  <h3 className="section-title">Thông tin liên hệ</h3>
                </div>
                <div className="section-content">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="name">Liên hệ:</td>
                        <td>{dataPostId?.user?.name}</td>
                      </tr>
                      <tr>
                        <td className="name">Điện thoại:</td>
                        <td>{dataPostId?.user?.phone}</td>
                      </tr>
                      <tr>
                        <td className="name">Zalo</td>
                        <td>{dataPostId?.user?.zalo}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="section post-map">
                <div className="section-header">
                  <h3 className="section-title">Bản đồ</h3>
                  <address className="section-description">
                    Địa chỉ: {dataPostId?.address}
                  </address>
                </div>
                <div className="section-content">
                  <div
                    id="__maps_content"
                    style={{ width: "100%", height: "300px" }}
                    data-lat="10.7976093"
                    data-long="106.6166242"
                    data-address={dataPostId?.address}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps/embed/v1/place?q=24 Đường Sơn Kỳ, Phường Sơn Kỳ, Quận Tân Phú, Hồ Chí Minh&amp;key=AIzaSyD6Coia3ssHYuRKJ2nDysWBdSlVlBCzKAw&amp;zoom=14"
                    ></iframe>
                  </div>
                </div>
              </section>

              <section className="section post-report">
                <div className="section-content">
                  <p>
                    Bạn đang xem nội dung tin đăng:{" "}
                    <em>
                      "CHO THUÊ PHÒNG TRỌ MỚI CHÍNH CHỦ, GIẢM GIÁ, QUẬN TÂN PHÚ
                      - GẦN BÊN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THỰC PHẨM - Mã tin:
                      135699"
                    </em>
                    . Mọi thông tin liên quan đến tin đăng này chỉ mang tính
                    chất tham khảo. Nếu bạn có phản hồi với tin đăng này (báo
                    xấu, tin đã cho thuê, không liên lạc được,...), vui lòng
                    thông báo để PhòngTrọ123 có thể xử lý.
                  </p>
                  <a
                    className="btn btn-report btn-outline"
                    target="_blank"
                    rel="nofollow"
                    href=""
                  >
                    <i></i> Gửi phản hồi
                  </a>
                </div>
              </section>
              <div className="post-fix-bar">
                <div className="inner clearfix">
                  <div className="left-bar">
                    <span className="post-fix-bar-price">
                      {dataPostId?.attributes?.price}
                      <span style={{ color: "#333", fontWeight: "normal" }}>
                        - {dataPostId?.attributes?.acreage}
                      </span>
                    </span>
                    <span className="post-fix-bar-address">
                      {dataPostId?.address}
                    </span>
                  </div>
                  <div className="right-bar">
                    <span
                      className="post-fix-bar-save js-btn-save"
                      data-post-id="135699"
                    >
                      <i></i> Yêu thích
                    </span>
                    <a
                      className="post-fix-bar-zalo"
                      rel="nofollow"
                      target="_blank"
                      href={`https://zalo.me/${dataPostId?.user?.zalo}`}
                    >
                      Nhắn Zalo
                    </a>
                    <a
                      className="post-fix-bar-phone"
                      rel="nofollow"
                      target="_blank"
                      href={`tel:${dataPostId?.user?.phone}`}
                    >
                      <i></i> Gọi ngay {dataPostId?.user?.phone}
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <section className="section section-post-listing">
              <div className="section-header">
                <h2 className="section-title">
                  Cho thuê phòng trọ Quận Tân Phú, Hồ Chí Minh
                </h2>
              </div>
              <ul className="post-listing clearfix"></ul>
            </section>
          </div>
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
};

export default DetailPage;
