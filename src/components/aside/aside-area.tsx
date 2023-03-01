import Link from "next/link";
function AsideArea({ item }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">{item.header}</h2>
      </div>
      <ul className="list-links clearfix">
        {item?.lists?.map((ele: any, index: number) => (
          <li key={index}>
            <Link className="" title={ele.value} href="# ">
              {ele.value}
            </Link>
            <span className="count">({ele.total})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideArea;
