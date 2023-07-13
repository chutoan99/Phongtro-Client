// LIBRARY
import { useQueryClient } from "react-query";
// APP
import { PriceModel } from "../../services/price/price.model";

function AsidePrice() {
  const queryClient = useQueryClient();
  const dataPrices = queryClient.getQueriesData<PriceModel[]>(["Price"])[0][1];

  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo giá</span>
      </div>
      <ul className="list-links price clearfix">
        {dataPrices?.map((ele: PriceModel, index: number) => (
          <li key={index}>
            <a href="#">{ele?.value}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsidePrice;
