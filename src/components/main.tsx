import { Aside } from "./index";
import { Pagination, Post } from "./index";

import Link from "next/link";
function Main() {
  return (
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
            <Post />
          </ul>
        </section>
        <div className="flex items-center justify-center">
          <Pagination length={100} count={10} />
        </div>
      </div>
      <div id="aside">
        <Aside />
      </div>
    </div>
  );
}
export default Main;
