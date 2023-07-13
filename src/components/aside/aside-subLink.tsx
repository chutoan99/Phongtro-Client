// APP
import Link from "next/link";
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
            <Link href="#" title="Mẫu hợp đồng cho thuê phòng trọ">
              {ele}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideSubLink;
