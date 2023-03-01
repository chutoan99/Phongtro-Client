import Link from "next/link";
import { Post } from "../../types/post.type";

interface AsideNewPost {
  item: Post[];
}

function AsideNewPost({ item }: AsideNewPost) {
  return (
    <section className="section section-aside-tinmoidang">
      <div className="section-header">
        <span className="section-title">Tin mới đăng</span>
      </div>
      <ul className="post-listing aside clearfix">
        {item.map((ele: Post, index: number) => (
          <li
            className="post-item clearfix tin-vip vip3"
            post-id="617232"
            key={index}
          >
            <Link href={`/detail/${ele?.id}`}>
              <figure>
                <img
                  className="lazy_done"
                  src={ele?.listImage?.postImg}
                  data-src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/02/24/5ba01f27-e77c-4529-b054-e05ba577c642_1677239744.jpg"
                  alt="HiFriendz Khai trương phòng trọ mới tinh ngay tại Phan Huy Ích"
                  height="100"
                  width="100"
                  data-loaded="true"
                />
              </figure>
              <div className="post-meta">
                <span className="post-title" style={{ color: "#3763e0" }}>
                  <span className="star star-2"></span> {ele.title}
                </span>
                <span className="post-price"> {ele?.attributes?.acreage}</span>
                <time className="post-time" title="Thứ 6, 19:07 24/02/2023">
                  {ele?.attributes?.published}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideNewPost;
