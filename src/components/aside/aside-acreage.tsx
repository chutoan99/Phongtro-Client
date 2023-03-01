function AsideAcreage({ item }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo diện tích</span>
      </div>
      <ul className="list-links price clearfix">
        {item?.data?.map((ele: any, index: number) => (
          <li key={index}>
            <a href="#">{ele?.value}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideAcreage;
