import Link from "next/link";

function AsideNewHot() {
  return (
    <section className="section section-aside-tinmoidang">
      <div className="section-header">
        <span className="section-title">Tin nổi bật</span>
      </div>
      <ul className="post-listing aside clearfix">
        <li className="post-item clearfix tin-vip vipnoibat" post-id="212446">
          <Link href="">
            <figure>
              <img
                className="lazy_done"
                src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/03/10/z2372635816674-545794dbbc111cba4b6b0b4ed0d7d184_1615391076.jpg"
                data-src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/03/10/z2372635816674-545794dbbc111cba4b6b0b4ed0d7d184_1615391076.jpg"
                alt="PHÒNG TRỌ MỚI RẤT ĐẸP SỐ 373/1/2A ĐƯỜNG LÝ THƯỜNG KIỆT, QUẬN TÂN BÌNH - GẦN BÊN TRƯỜNG ĐẠI HỌC BÁCH KHOA"
                height="100"
                width="100"
                data-loaded="true"
              />
            </figure>
            <div className="post-meta">
              <span className="post-title" style={{ color: "#E13427" }}>
                <span className="star star-5"></span> PHÒNG TRỌ MỚI RẤT ĐẸP SỐ
                373/1/2A ĐƯỜNG…{" "}
              </span>
              <span className="post-price">3.9 triệu/tháng</span>
              <time className="post-time" title="Thứ 3, 09:27 21/02/2023">
                Hôm nay
              </time>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default AsideNewHot;
