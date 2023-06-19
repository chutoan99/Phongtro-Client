import Link from "next/link";
import { useQueryClient } from "react-query";
import { Area } from "../../models/area";

function AsideAcreage() {
  const queryClient = useQueryClient();
  const dataArea =
    queryClient.getQueriesData<any>(["Area"]).length > 0
      ? queryClient.getQueriesData<any>(["Area"])[0][1]?.area?.response
      : null;

  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">Xem theo diện tích</span>
      </div>
      <ul className="list-links price clearfix">
        {dataArea?.map((ele: Area, index: number) => (
          <li key={index}>
            <Link href="#">{ele?.value}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideAcreage;
