// LIBRARY
// APP
import { PriceModel } from "../../services/price/price.model";
import { useQueryPrices } from "../../hooks/useQueryPrices";
import Link from "next/link";

function AsidePrice() {
  const { data: dataPrices, isLoading, isFetching } = useQueryPrices();
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo giá</span>
      </div>
      {!isLoading ? (
        <ul className="list-links price clearfix">
          {dataPrices?.map((ele: PriceModel, index: number) => (
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
