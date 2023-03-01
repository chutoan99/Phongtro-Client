function AuthorAside({ item }) {
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
      <a className="btn author-phone" rel="nofollow" href="tel:0918180057">
        <i></i> {item?.phone}
      </a>
      <a
        className="btn author-zalo"
        target="_blank"
        rel="nofollow"
        href={item?.phone}
      >
        <i></i> Nhắn Zalo
      </a>
      <span className="btn post-save js-btn-save" data-post-id="135699">
        <i></i> Yêu thích
      </span>
    </div>
  );
}
export default AuthorAside;
