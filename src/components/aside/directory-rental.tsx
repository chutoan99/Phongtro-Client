//? LIBRARY
import Link from "next/link";

function AsideDirectoryRental({ data }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{data.header}</span>
      </div>
      <ul className="list-links clearfix">
        {data?.lists.map((ele: any, index: number) => (
          <li key={index}>
            <h2>
              <Link href="#" title="Cho thuê phòng trọ" prefetch={false}>
                {ele.content}
              </Link>
            </h2>
            <span className="count">({ele.amount})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideDirectoryRental;
