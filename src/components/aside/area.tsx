//? LIBRARY
import Link from "next/link";
import { AreaModel } from "../../models/area.model";
//? APP

function AsideArea({ data, isLoading }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo diện tích</span>
      </div>
      {!isLoading ? (
        <ul className="list-links price clearfix">
          {data?.map((ele: AreaModel, index: number) => (
            <li key={index}>
              <Link href="#" prefetch={false}>
                {ele?.value}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span className="loader"></span>
      )}
    </section>
  );
}
export default AsideArea;
