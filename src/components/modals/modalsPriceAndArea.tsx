import { memo, useEffect, useState } from "react";
import {
  getNumbersPrice,
  getNumbersArea,
} from "../../utils/Commom/fomarNumber";
function ModalsPriceAndArea({
  items,
  modals,
  setOverPlay,
  setModals,
  text,
  name,
  handleSubmit,
  arrMinMax,
}) {
  const [persent1, setPersent1] = useState(
    name === "price" && arrMinMax?.priceArr
      ? arrMinMax?.priceArr[0]
      : name === "area" && arrMinMax?.areaArr
      ? arrMinMax?.areaArr[0]
      : 0
  );
  const [persent2, setPersent2] = useState(
    name === "price" && arrMinMax?.priceArr
      ? arrMinMax?.priceArr[1]
      : name === "area" && arrMinMax?.areaArr
      ? arrMinMax?.areaArr[1]
      : 100
  );
  const [activedEl, setActivedEl] = useState("");

  useEffect(() => {
    const activedTrackEl = document.getElementById("track-active");
    console.log(activedTrackEl);
    if (activedTrackEl) {
      if (persent2 <= persent1) {
        activedTrackEl.style.left = `${persent2}%`;
        activedTrackEl.style.right = `${100 - persent1}%`;
      } else {
        activedTrackEl.style.left = `${persent1}%`;
        activedTrackEl.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);

  const handleClickTrack = (e, value) => {
    const stackEl = document.getElementById("track");
    const stackRect = stackEl.getBoundingClientRect();
    let percent = value
      ? value
      : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
    if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
      setPersent1(percent);
    } else {
      setPersent2(percent);
    }
  };
  const convert100toTarget = (percent) => {
    return name === "price"
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : name === "area"
      ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
      : 0;
  };
  const convertto100 = (percent) => {
    let target = name === "price" ? 15 : name === "area" ? 90 : 1;
    return Math.floor((percent / target) * 100);
  };
  const handleActive = (code, value) => {
    setActivedEl(code);

    let arrMaxMin =
      name === "price" ? getNumbersPrice(value) : getNumbersArea(value);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPersent1(0);
        setPersent2(convertto100(1));
      }
      if (arrMaxMin[0] === 20) {
        setPersent1(0);
        setPersent2(convertto100(20));
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPersent1(100);
        setPersent2(100);
      }
    }
    if (arrMaxMin.length === 2) {
      setPersent1(convertto100(arrMaxMin[0]));
      setPersent2(convertto100(arrMaxMin[1]));
    }
  };
  const handleBeforeSubmit = (e) => {
    let min = persent1 <= persent2 ? persent1 : persent2;
    let max = persent1 <= persent2 ? persent2 : persent1;
    let arrMinMax = [convert100toTarget(min), convert100toTarget(max)];

    handleSubmit(
      e,
      {
        [`${name}Number`]: arrMinMax,
        [name]: `Từ ${convert100toTarget(min)} - ${convert100toTarget(max)} ${
          name === "price" ? "triệu" : "m2"
        }`,
      },
      {
        [`${name}Arr`]: [min, max],
      }
    );
  };

  return (
    <>
      {modals ? (
        <div className="filter-popup has-footer js-filter-popup js-filter-popup-price show">
          <div className="filter-popup-header">
            <span className="header-label">{text}</span>{" "}
            <div
              className="popup-close js-filter-popup-close"
              onClick={() => {
                setModals(false);
                setOverPlay(false);
              }}
            >
              Đóng
            </div>
          </div>
          <div className="filter-popup-content">
            <div className="bds-ranger">
              <div
                style={{
                  paddingTop: "3px",
                  display: "flex",
                  margin: "0 48px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    width: "100%",
                    color: "#ff6600",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {persent1 === 100 && persent2 === 100
                    ? `Trên ${convert100toTarget(persent1)} ${
                        name === "price" ? "triệu" : "m2"
                      } +`
                    : `Từ ${
                        persent1 <= persent2
                          ? convert100toTarget(persent1)
                          : convert100toTarget(persent2)
                      } - ${
                        persent2 >= persent1
                          ? convert100toTarget(persent2)
                          : convert100toTarget(persent1)
                      } ${name === "price" ? "triệu" : "m2"}`}
                </p>
              </div>
              <div style={{ margin: "0 48px" }}>
                <div className="input-slider-wrapper">
                  <div
                    className="slider-track input-slider-track"
                    onClick={(e) => handleClickTrack}
                    style={{
                      backgroundColor: "rgb(209 213 219 / 1",
                      width: "100%",
                    }}
                    id="stack"
                  ></div>
                  <div
                    className="slider-track-active input-slider-track"
                    id="track-active"
                    style={{ backgroundColor: "rgb(234 88 12 / 1" }}
                    onClick={(e) => handleClickTrack}
                  ></div>
                  <input
                    type="range"
                    max="100"
                    min="0"
                    step="1"
                    className="input-range"
                    value={persent1}
                    onChange={(e) => {
                      setPersent1(+e.target.value);
                      activedEl && setActivedEl("");
                    }}
                  />
                  <input
                    type="range"
                    max="100"
                    min="0"
                    step="1"
                    value={persent2}
                    onChange={(e) => {
                      setPersent2(+e.target.value);
                      activedEl && setActivedEl("");
                    }}
                    className="input-range"
                  />
                </div>
                <div
                  style={{
                    paddingTop: "23px",
                    zIndex: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="translate-x-2"
                    style={{ fontSize: "15px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClickTrack(e, 0);
                    }}
                  >
                    0
                  </span>
                  {name === "price" ? (
                    <span
                      style={{ fontSize: "15px" }}
                      className="translate-x-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClickTrack(e, 100);
                      }}
                    >
                      +15 triệu/đồng
                    </span>
                  ) : (
                    <span
                      style={{ fontSize: "15px" }}
                      className="translate-x-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClickTrack(e, 100);
                      }}
                    >
                      90m2
                    </span>
                  )}
                </div>
                <div
                  style={{
                    marginTop: "40px",
                    flexWrap: "wrap",
                    display: "flex",
                  }}
                >
                  <ul className="custom-list-ranger">
                    {items?.map((item: any, index: number) => (
                      <li
                        className=""
                        key={index}
                        onClick={() => handleActive(item.value, item.code)}
                      >
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-popup-footer">
            <div className="filter-btn-bottom" onClick={handleBeforeSubmit}>
              Áp dụng
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default memo(ModalsPriceAndArea);
