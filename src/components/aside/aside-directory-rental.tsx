function AsideDirectoryRental({ item }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{item.header}</span>
      </div>
      <ul className="list-links clearfix">
        {item.lists.map((ele: any, index: number) => (
          <li key={index}>
            <h2>
              <a href="" title="Cho thuê phòng trọ">
                {ele.content}
              </a>
            </h2>
            <span className="count">({ele.amount})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideDirectoryRental;
