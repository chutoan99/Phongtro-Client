// APP
import Link from "next/link";

function AsideSubLink({ data }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{data?.header}</span>
      </div>
      <ul className="list-links clearfix">
        {data?.lists?.map((ele: any, index: number) => (
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
