//? LIBRARY
import Link from "next/link";
import { PriceModel } from "../../models/price.model";
//? APP

function AsidePrice({ data, isLoading }) {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo giá</span>
      </div>
      {!isLoading ? (
        <ul className="list-links price clearfix">
          {data?.map((ele: PriceModel, index: number) => (
            <li key={index}>
              <Link prefetch={false} href="#">
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
export default AsidePrice;
