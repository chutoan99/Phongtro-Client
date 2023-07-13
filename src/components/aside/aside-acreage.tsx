// LIBRARY
import Link from "next/link";
import { useQueryClient } from "react-query";
// APP
import { AreaModel } from "../../services/area/area.model";

function AsideAcreage() {
  const queryClient = useQueryClient();
  const dataArea = queryClient.getQueriesData<AreaModel[]>(["Area"])[0][1];

  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo diện tích</span>
      </div>
      <ul className="list-links price clearfix">
        {dataArea?.map((ele: AreaModel, index: number) => (
          <li key={index}>
            <Link href="#">{ele?.value}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideAcreage;
