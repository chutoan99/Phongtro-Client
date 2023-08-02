//? LIBRARY
import Link from "next/link";

function Author({ item }) {
  return (
    <div className="author-aside">
      <figure className="author-avatar">
        <img src={item?.avatar} />
      </figure>
      <span className="author-name">{item?.name}</span>
      <div style={{ minHeight: "16px", marginBottom: "10px" }}>
        <div className="author-online-status online">
          <i></i>
          <span>Đang hoạt động</span>
        </div>
      </div>
      <Link
        className="btn author-phone"
        rel="nofollow"
        href="#"
        // href={`tel:${item?.phone}`}
      >
        <i></i> {item?.phone}
      </Link>
      <Link
        className="btn author-zalo"
        target="_blank"
        rel="nofollow"
        href="#"
        // href={item?.phone}
      >
        <i></i> Nhắn Zalo
      </Link>
      <span className="btn post-save js-btn-save" data-post-id="135699">
        <i></i> Yêu thích
      </span>
    </div>
  );
}
export default Author;
