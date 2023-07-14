// LIBRARY
import Link from "next/link";

function AsideAcreage({ data }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">{data.header}</h2>
      </div>
      <ul className="list-links clearfix">
        {data?.lists?.map((ele: any, index: number) => (
          <li key={index}>
            <Link className="" title={ele.value} href="#" prefetch={false}>
              {ele.value}
            </Link>
            <span className="count">({ele.total})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideAcreage;
