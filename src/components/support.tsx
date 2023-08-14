//? APP
import { memo } from "react";
import Link from "next/link";
import { support } from "../utils/support";
function Support() {
  return (
    <section className="section section-support">
      <div className="section-content clearfix">
        <div className="support-bg"></div>
        <div className="list-support clearfix">
          <div className="list-support-title">
            Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
          </div>
          {support.lists.map((item, index) => (
            <div className="support-item" key={index}>
              <span className="support-item-title"> {item.content}</span>
              <Link rel="nofollow" href="tel:0917686101">
                {item.phone}
              </Link>
              <a
                rel="nofollow"
                target="_blank"
                href="https://zalo.me/0917686101"
              >
                {item.zalo}
              </a>
            </div>
          ))}

          <Link className="btn btn-page-contact" rel="nofollow" href="/lien-he">
            Gửi liên hệ
          </Link>
        </div>
      </div>
    </section>
  );
}
export default memo(Support);
