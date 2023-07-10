import { whyUs } from "../utils/why_us";
import { renderStart } from "../utils/Commom/renderStart";

function WhyUs() {
  return (
    <section className="section section-whyus">
      <div className="section-content">
        <h4 className="section-title"> {whyUs.header}</h4>
        <p>
          {whyUs.title}
          <a href="/" title="Cho thuê phòng trọ">
            <strong>cho thuê phòng trọ</strong>
          </a>
          ,<strong>nhà trọ</strong>,{" "}
          <a href="/" title="Cho thuê nhà nguyên căn">
            <strong>thuê nhà nguyên căn</strong>
          </a>
          ,
          <a href="/" title="Cho thuê căn hộ">
            <strong>cho thuê căn hộ</strong>
          </a>
          ,
          <a href="/" title="Tìm người ở ghép">
            <strong>tìm người ở ghép</strong>
          </a>
          ,
          <a href="/" title="Cho thuê mặt bằng">
            <strong>cho thuê mặt bằng</strong>
          </a>
          ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều
          khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
        </p>
        <div className="whyus-countup clearfix">
          {whyUs.lists.map((item: any, index: number) => (
            <div className="whyus-countup-item" key={index}>
              <span className="whyus-countup-item-number">{item.content}</span>
              <span className="whyus-countup-item-text">{item.subContent}</span>
            </div>
          ))}
        </div>
        <br />
        <h5 className="section-title">{whyUs.subTitle}</h5>

        <div className="flex justify-center text-[1.5rem] mb-[20px] gap-[20px]">
          {renderStart(5).map((start, index) => {
            return <span key={index}>{start}</span>;
          })}
        </div>

        <div
          className="clearfix"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <span className="star star-5"></span>
        </div>
        <p className="testimonial">
          {whyUs.des} <br />
          <span
            style={{
              fontStyle: "normal",
              display: "block",
              marginTop: "10px",
            }}
          >
            {whyUs.des2}
          </span>
        </p>
        <br />
        <h6 className="section-title">{whyUs.des3}</h6>
        <p>{whyUs.des4}</p>
        <a
          className="btn red"
          style={{ padding: "10px 30px" }}
          rel="nofollow"
          href="#"
        >
          Đăng tin ngay
        </a>
      </div>
    </section>
  );
}
export default WhyUs;
