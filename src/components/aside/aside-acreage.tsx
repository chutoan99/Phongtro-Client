// LIBRARY
import Link from "next/link";
// APP
import { AreaModel } from "../../services/area/area.model";
import { useQueryAreas } from "../../hooks/useQueryAreas";

function AsideAcreage() {
  const { data, isFetching, isLoading } = useQueryAreas();
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
export default AsideAcreage;
