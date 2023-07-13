// LIBRARY
import Link from "next/link";
// APP
import { NewPostModel } from "../../services/post/newPost.model";
import { useQueryNewPosts } from "../../hooks/useQueryNewPosts";
import InputNewPost from "../../graphql/arguments/input_new_post.args";
import { useRouter } from "next/router";

function AsideNewPost() {
  const router = useRouter();
  const { pathname } = router;
  const routeSegment = pathname.split("/")[1];
  const payloadNewPost: InputNewPost = {
    pageSize: 10,
    pageNumber: 1,
  };

  const { data, isLoading, isFetching } = useQueryNewPosts(payloadNewPost);
  return (
    <section className="section section-aside-tinmoidang">
      <div className="section-header">
        <span className="section-title">Tin mới đăng</span>
      </div>
      {!isLoading! ? (
        <ul className="post-listing aside clearfix">
          {data?.map((ele: any, index: number) => (
            <li
              className="post-item clearfix tin-vip vip3"
              post-id="617232"
              key={index}
            >
              <Link href={`/${routeSegment}/${ele?.id}`} prefetch={false}>
                <figure>
                  <img
                    className="lazy_done"
                    src={ele?.listImage?.postImg}
                    alt={ele?.title}
                    height="100"
                    width="100"
                    data-loaded="true"
                  />
                </figure>
                <div className="post-meta">
                  <span className="post-title" style={{ color: "#3763e0" }}>
                    <span className="star star-2"></span> {ele.title}
                  </span>
                  <span className="post-price">{ele?.attributes?.acreage}</span>
                  <time className="post-time" title="Thứ 6, 19:07 24/02/2023">
                    {ele?.attributes?.published}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span className="loader"></span>
      )}
    </section>
  );
}
export default AsideNewPost;
