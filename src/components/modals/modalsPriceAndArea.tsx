// LIBRARY
import { memo, useEffect, useState } from "react";
// APP
import { getCodesArea, getCodesPrice } from "../../utils/Commom/getCodePrice";
import {
  convert100ToTarget,
  convertTo100,
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
  let number;
  name === "price" ? (number = +15) : (number = +90);
  const [perSent1, setPerSent1] = useState(
    name === "price" && arrMinMax?.priceArr?.length > 0
      ? arrMinMax?.priceArr[0]
      : name === "area" && arrMinMax?.areaArr?.length > 0
      ? arrMinMax?.areaArr[0]
      : 0
  );
  const [perSent2, setPerSent2] = useState(
    name === "price" && arrMinMax?.priceArr?.length > 0
      ? arrMinMax?.priceArr[1]
      : name === "area" && arrMinMax?.areaArr?.length > 0
      ? arrMinMax?.areaArr[1]
      : 100
  );
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(number);

  const handleClickMin = () => {
    setNumber1(0);
    setPerSent1(0);
  };
  const handleClickMax = () => {
    setNumber2(number);
    setPerSent2(100);
  };
  useEffect(() => {
    const activeTrackId = document.getElementById("track-active");
    if (perSent1 <= perSent2) {
      activeTrackId.style.left = `${perSent1}%`;
      activeTrackId.style.right = `${100 - perSent2}%`;
      setNumber1(convert100ToTarget(perSent1, name));
      setNumber2(convert100ToTarget(perSent2, name));
    } else {
      activeTrackId.style.left = `${perSent2}%`;
      activeTrackId.style.right = `${100 - perSent1}%`;
      setNumber1(convert100ToTarget(perSent2, name));
      setNumber2(convert100ToTarget(perSent1, name));
    }
  }, [perSent2, perSent1]);
  // lấy vị trí click
  const handleClickStack = (e) => {
    // e.stopPropagation();
    const stackEl = document.getElementById("stack");
    const stackRect = stackEl.getBoundingClientRect();
    let perSent =
      Math.round((e.clientX - stackRect.left) * 100) / stackRect.width;
    if (Math.abs(perSent - perSent1) <= Math.abs(perSent - perSent2)) {
      setPerSent1(perSent);
      setNumber1(convert100ToTarget(perSent, name));
    } else {
      setPerSent2(perSent);
      setNumber2(convert100ToTarget(perSent, name));
    }
  };
  const handleChangeRange = (value) => {
    let arrMaxMin;
    name === "price"
      ? (arrMaxMin = getNumbersPrice(value))
      : (arrMaxMin = getNumbersArea(value));
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPerSent1(0);
        setPerSent2(convertTo100(1, name));
      }
      if (arrMaxMin[0] === 20) {
        setPerSent1(0);
        setPerSent2(convertTo100(20, name));
      }
      if (arrMaxMin[0] === number) {
        setPerSent1(100);
        setPerSent2(100);
      }
    } else {
      setPerSent1(convertTo100(arrMaxMin[0], name));
      setPerSent2(convertTo100(arrMaxMin[1], name));
    }
  };

  const handleBeforeSubmit = () => {
    let min =
      perSent1 <= perSent2
        ? convert100ToTarget(perSent1, name)
        : convert100ToTarget(perSent2, name);
    let max =
      perSent1 <= perSent2
        ? convert100ToTarget(perSent2, name)
        : convert100ToTarget(perSent1, name);
    let result = [min, max];
    const gaps =
      name === "price"
        ? getCodesPrice(result, items)
        : name === "area"
        ? getCodesArea(result, items)
        : [];
    handleSubmit(
      {
        [`${name}Number`]: [min, max],
        [name]: `Từ ${min} - ${max} ${name === "price" ? "triệu" : "m2"}`,
      },
      { [`${name}Arr`]: [perSent1, perSent2] }
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
                  {perSent1 === 100 && perSent2 === 100
                    ? `Trên ${number2} ${name === "price" ? "Triệu" : "m2"}`
                    : `Từ ${number1} - ${number2}  ${
                        name === "price" ? "Triệu" : "m2"
                      }`}
                </p>
              </div>
              <div style={{ margin: "0 48px" }}>
                <div className="input-slider-wrapper">
                  <div
                    className="slider-track input-slider-track"
                    onClick={handleClickStack}
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
                    onClick={handleClickStack}
                  ></div>
                  <input
                    type="range"
                    max="100"
                    min="0"
                    step="1"
                    className="input-range"
                    value={perSent1}
                    onChange={(e) => setPerSent1(+e.target.value)}
                  />
                  <input
                    type="range"
                    max="100"
                    min="0"
                    step="1"
                    value={perSent2}
                    onChange={(e) => setPerSent2(+e.target.value)}
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
                    onClick={handleClickMin}
                  >
                    0
                  </span>

                  {name === "price" ? (
                    <span
                      style={{ fontSize: "15px" }}
                      className="translate-x-5"
                      onClick={handleClickMax}
                    >
                      +15 triệu/đồng
                    </span>
                  ) : (
                    <span
                      style={{ fontSize: "15px" }}
                      className="translate-x-5"
                      onClick={handleClickMax}
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
                        onClick={() => handleChangeRange(item.value)}
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
