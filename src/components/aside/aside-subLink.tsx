// APP
import { subLink } from "../../utils/subLink";

function AsideSubLink() {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{subLink?.header}</span>
      </div>
      <ul className="list-links clearfix">
        {subLink?.lists?.map((ele: any, index: number) => (
          <li key={index}>
            <a
              href="/news/hop-dong-thue-nha-tro-phong-tro"
              title="Mẫu hợp đồng cho thuê phòng trọ"
            >
              {ele}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideSubLink;
