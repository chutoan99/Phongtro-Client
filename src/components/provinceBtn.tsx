import Link from "next/link";
import { locationCity } from "../utils/constant";

function ProvinceBtn() {
  return (
    <section className="section section-top-location">
      <div className="location-city clearfix">
        {locationCity.map((ele: any, index: number) => (
          <Link key={index} className={ele.class} href="" title={ele.title}>
            <div className="location-bg"></div>
            <span className="location-cat">
              <span className="location-name">{ele.des}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProvinceBtn;
