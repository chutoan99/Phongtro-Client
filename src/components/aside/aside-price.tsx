import { useQueryClient } from "react-query";
import { Price } from "../../models/price";

function AsidePrice() {
  const queryClient = useQueryClient();
  const dataPrice =
    queryClient.getQueriesData<any>(["Price"]).length > 0
      ? queryClient.getQueriesData<any>(["Price"])[0][1]?.price?.response
      : null;

  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo giá</span>
      </div>
      <ul className="list-links price clearfix">
        {dataPrice?.map((ele: Price, index: number) => (
          <li key={index}>
            <a href="#">{ele?.value}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsidePrice;
