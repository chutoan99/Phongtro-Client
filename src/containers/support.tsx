// APP
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
              <a rel="nofollow" href="tel:0917686101">
                {item.phone}
              </a>
              <a
                rel="nofollow"
                target="_blank"
                href="https://zalo.me/0917686101"
              >
                {item.zalo}
              </a>
            </div>
          ))}

          <a className="btn btn-page-contact" rel="nofollow" href="/lien-he">
            Gửi liên hệ
          </a>
        </div>
      </div>
    </section>
  );
}
export default Support;
