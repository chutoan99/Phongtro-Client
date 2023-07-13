// LIBRARY
import querystring from "querystring";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useCallback, useEffect, useState } from "react";
// APP
import { ModalCategory, ModalProvince, ModalPrice, ModalArea } from "./index";
import { AreaModel } from "../services/area/area.model";
import { PriceModel } from "../services/price/price.model";
import { CategoryModel } from "../services/category/category.model";
import { ProvinceModel } from "../services/province/province.model";

function Search({ setPayload }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [indexModels, setIndexModals] = useState();
  const [modals, setModals] = useState(true);
  const [queries, setQueries] = useState<any>([]);
  const [arrMinMax, setArrMinMax] = useState({});
  const [overPlay, setOverPlay] = useState(false);

  const dataPrices = queryClient.getQueriesData<PriceModel[]>(["Price"])[0][1];
  const dataAreas = queryClient.getQueriesData<AreaModel[]>(["Area"])[0][1];
  const dataCategories = queryClient.getQueriesData<CategoryModel[]>([
    "Category",
  ])[0][1];
  const dataProvinces = queryClient.getQueriesData<ProvinceModel[]>([
    "Province",
  ])[0][1];

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
              <ModalCategory
                handleSubmit={handleSubmit}
                items={dataCategories}
                isModals={modals}
                setModals={setModals}
                setOverPlay={setOverPlay}
                queries={queries}
              />
            )}
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
          </div>
        </section>
        {overPlay && <div className="black_overlay js-black-overlay"></div>}
      </section>
    </div>
  );
}
export default Search;
