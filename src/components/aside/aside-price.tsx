function AsidePrice({ item }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo giá</span>
      </div>
      <ul className="list-links price clearfix">
        {item?.map((ele: any, index: number) => (
          <li key={index}>
            <a href="#">{ele?.value}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsidePrice;
