// APP
import { directoryRental } from "../../utils/constant";

function AsideDirectoryRental() {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{directoryRental.header}</span>
      </div>
      <ul className="list-links clearfix">
        {directoryRental?.lists.map((ele: any, index: number) => (
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
