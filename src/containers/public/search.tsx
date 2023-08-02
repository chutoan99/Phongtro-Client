//? LIBRARY
import querystring from "querystring";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
//? HOOKS
import { useQueryPrices } from "../../services/price/index.hook";
import { useQueryAreas } from "../../services/area/index.hook";
import { useQueryCategories } from "../../services/category/index.hook";
import { useQueryProvinces } from "../../services/province/index.hook";
//? APP
import { ModalCategory, ModalProvince, ModalPrice, ModalArea } from "./index";

function Search({ setPayload, onSearch }) {
  const router = useRouter();
  const [indexModels, setIndexModals] = useState();
  const [modals, setModals] = useState(true);
  const [queries, setQueries] = useState<any>([]);
  const [arrMinMax, setArrMinMax] = useState({});
  const [overPlay, setOverPlay] = useState(false);
  const { data: dataPrices } = useQueryPrices();
  const { data: dataAreas } = useQueryAreas();
  const { data: dataCategories } = useQueryCategories();
  const { data: dataProvinces } = useQueryProvinces();

  useEffect(() => {
    if (!modals && overPlay) {
      setOverPlay(false);
    }
  }, [modals]);

  const handleIsShowModel = (number) => {
    setIndexModals(number);
    setModals(true);
  };

  const handleSubmit = useCallback(
    (query, arrMaxMin) => {
      setQueries((prev) => ({ ...prev, ...query }));
      setModals(false);
      arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    },
    [queries, modals]
  );
  const handelSearch = () => {
    const queryCodes = Object.entries(queries).filter(
      (item) => item[0].includes("Code") || item[0].includes("Number")
    );
    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
    });

    router.push({
      pathname: "/",
      search: "?" + querystring.stringify(queryCodesObj),
    });

    setPayload((prev) => ({
      ...prev,
      ...queryCodesObj,
    }));
    onSearch();
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
            {indexModels === 0 && (
              <ModalCategory
                handleSubmit={handleSubmit}
                items={dataCategories}
                isModals={modals}
                setModals={setModals}
                setOverPlay={setOverPlay}
                queries={queries}
              />
            )}
            <div
              className="filter-item location js-filter-show-popup-city"
              onClick={() => {
                handleIsShowModel(1);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.province || "Toàn quốc"}</span>
            </div>
            {indexModels === 1 && (
              <ModalProvince
                items={dataProvinces}
                modals={modals}
                queries={queries}
                setOverPlay={setOverPlay}
                setModals={setModals}
                handleSubmit={handleSubmit}
              />
            )}
            <div
              className="filter-item post-price js-filter-show-popup-price"
              onClick={() => {
                handleIsShowModel(2);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.price || "Chọn giá"}</span>
            </div>
            {indexModels === 2 && (
              <ModalPrice
                items={dataPrices}
                modals={modals}
                setModals={setModals}
                setOverPlay={setOverPlay}
                handleSubmit={handleSubmit}
                arrMinMax={arrMinMax}
              />
            )}
            <div
              className="filter-item post-acreage js-filter-show-popup-acreage"
              onClick={() => {
                handleIsShowModel(3);
                setOverPlay(!overPlay);
              }}
            >
              <span> {queries.area || "Chọn điện tích"}</span>
            </div>
            {indexModels === 3 && (
              <ModalArea
                items={dataAreas}
                modals={modals}
                setModals={setModals}
                handleSubmit={handleSubmit}
                setOverPlay={setOverPlay}
                arrMinMax={arrMinMax}
              />
            )}
            <div className="filter-item submit" onClick={handelSearch}>
              <span>Tìm kiếm</span>
            </div>
          </div>
        </section>
        {overPlay && <div className="black_overlay js-black-overlay"></div>}
      </section>
    </div>
  );
}
export default Search;
