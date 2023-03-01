function AsideSubLink({ item }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{item?.header}</span>
      </div>
      <ul className="list-links clearfix">
        {item?.lists?.map((ele: any, index: number) => (
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
