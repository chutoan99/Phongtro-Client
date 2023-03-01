import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import querystring from "querystring";
import { ModalsCategoryAndProvince } from "./index";
import ModalsPriceAndArea from "./modals/modalsPriceAndArea";
import { useSelector } from "react-redux";
import { AppState } from "../app/store";
function Search() {
  const router = useRouter();
  const [indexModels, setIndexModals] = useState();
  const [modals, setModals] = useState(true);
  const [queries, setQueries] = useState<any>([]);
  const [arrMinMax, setArrMinMax] = useState({});
  const [overPlay, setOverPlay] = useState(false);
  const handleIsShowModel = (number) => {
    setIndexModals(number);
    setModals(true);
  };
  const { price, area, province, category } = useSelector(
    (state: AppState) => state
  );
  const handleSubmit = useCallback(
    (query, arrMaxMin) => {
      setQueries((prev) => ({ ...prev, ...query }));
      setModals(false);
      arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    },
    [queries, modals]
  );
  const handelSearch = () => {
    const queryCodes = Object.entries(queries).filter((item) =>
      item[0].includes("Code")
    );
    console.log(queries, "queries");

    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
    });
    router.push({
      pathname: "/",
      search: "?" + querystring.stringify(queryCodesObj),
    });
    console.log(queryCodesObj, "queryCodesObj");
  };

  return (
    <div style={{ height: "60px", marginBottom: "10px" }}>
      <section id="filter-top-inner">
        <section id="filter-top">
          <div className="filter-body">
            <div
              className="filter-item post-estate-type js-filter-show-popup-estate-type active"
              onClick={() => {
                handleIsShowModel(0);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.category || "Phòng trọ, nhà trọ"}</span>
              <span className="delete-item"></span>
            </div>
            <div
              className="filter-item location js-filter-show-popup-city"
              onClick={() => {
                handleIsShowModel(1);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.province || "Toàn quốc"}</span>
            </div>
            <div
              className="filter-item post-price js-filter-show-popup-price"
              onClick={() => {
                handleIsShowModel(2);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.price || "Chọn giá"}</span>
            </div>
            <div
              className="filter-item post-acreage js-filter-show-popup-acreage"
              onClick={() => {
                handleIsShowModel(3);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.area || "Chọn điện tích"}</span>
            </div>
            <div className="filter-item submit" onClick={handelSearch}>
              <span>Tìm kiếm</span>
            </div>
            {indexModels === 0 && (
              <ModalsCategoryAndProvince
                handleSubmit={handleSubmit}
                items={category?.data}
                modals={modals}
                setModals={setModals}
                setOverPlay={setOverPlay}
                queries={queries}
                text="CHỌN Danh Mục"
                name="category"
              />
            )}
            {indexModels === 1 && (
              <ModalsCategoryAndProvince
                items={province?.data}
                modals={modals}
                queries={queries}
                setOverPlay={setOverPlay}
                setModals={setModals}
                handleSubmit={handleSubmit}
                text="CHỌN TỈNh THÀNH"
                name="province"
              />
            )}
            {indexModels === 2 && (
              <ModalsPriceAndArea
                items={price?.data}
                modals={modals}
                setModals={setModals}
                setOverPlay={setOverPlay}
                handleSubmit={handleSubmit}
                arrMinMax={arrMinMax}
                text="CHỌN GIÁ"
                name="price"
              />
            )}
            {indexModels === 3 && (
              <ModalsPriceAndArea
                items={area?.data}
                modals={modals}
                setModals={setModals}
                handleSubmit={handleSubmit}
                setOverPlay={setOverPlay}
                arrMinMax={arrMinMax}
                text="CHỌN DIỆN TÍCH"
                name="area"
              />
            )}
          </div>
        </section>
        {overPlay && <div className="black_overlay js-black-overlay"></div>}
      </section>
    </div>
  );
}
export default Search;
