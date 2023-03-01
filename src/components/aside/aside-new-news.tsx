function AsideNewNews({ item }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{item.header}</span>
      </div>
      <ul className="list-links clearfix">
        {item.lists.map((ele: any, index: number) => (
          <li key={index}>
            <a href="# " title={ele}>
              {ele}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideNewNews;
