// LIBRARY
import Link from "next/link";
// APP
import { renderStart } from "../utils/Commom/renderStart";
import { useRouter } from "next/router";
import { PostModel } from "../models/post.model";

function Post({ data }) {
  const router = useRouter();
  const { pathname } = router;
  const routeSegment = pathname.split("/")[1];
  return (
    <>
      {data?.map((item: PostModel, index: number) => (
        <li
          key={index}
          className="post-item post-id-212446 style-4 clearfix tin-vip vipnoibat"
          style={{ borderColor: "#311f1e" }}
        >
          <figure className="post-thumb">
            <Link
              href={`${routeSegment}/${item?.id}` || ""}
              className="clearfix"
            >
              <img
                className="lazy_done"
                src={item?.listImage?.postImg}
                data-src={item?.listImage?.postImg}
                alt={item?.title}
                height="100"
                width="100"
                data-loaded="true"
              />
            </Link>
            <span className="images-number">{item?.listImage?.total} ảnh</span>
            <span
              className="post-save js-btn-save"
              data-post-id="212446"
              title="Lưu tin này"
            >
              <i></i>
            </span>
          </figure>
          <div className="post-meta">
            <h3 className="post-title">
              <Link style={{ color: "#E13427" }} href="#">
                {renderStart(item?.start).length > 0 &&
                  renderStart(item?.start).map((start, index) => {
                    return <span key={index}>{start}</span>;
                  })}
                {item?.title}
              </Link>
            </h3>

            <div className="meta-row clearfix">
              <span className="post-price">{item?.attributes?.price}</span>
              <span className="post-acreage">{item?.attributes?.acreage}</span>
              <span className="post-location">
                <Link href="#" title={item?.title}>
                  {`${
                    item?.address.split(",")[
                      item?.address.split(",").length - 2
                    ]
                  },${
                    item?.address.split(",")[
                      item?.address.split(",").length - 1
                    ]
                  }`}
                </Link>
              </span>
              <time className="post-time" title="Thứ 3, 09:27 21/02/2023">
                {item?.attributes.published}
              </time>
            </div>
            <div className="meta-row clearfix">
              <p className="post-summary">{JSON.parse(item?.description)}</p>
            </div>
            <div className="meta-row clearfix">
              <div className="post-author">
                <img src={item?.user?.avatar} alt="avatar" />
                <span className="author-name">{item.user?.name}</span>
              </div>
              <Link
                rel="nofollow"
                target="_blank"
                href={`https://zalo.me/${item?.user?.zalo}`}
                className="btn-quick-zalo"
              >
                Nhắn Zalo: {item?.user?.zalo}
              </Link>
              <a
                rel="nofollow"
                target="_blank"
                href="tel:0918180057"
                className="btn-quick-call"
              >
                Gọi: {item.user.phone}
              </a>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
export default Post;
