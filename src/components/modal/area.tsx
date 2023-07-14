// LIBRARY
import { memo, useEffect, useState } from "react";
// APP
import {
  convert100ToTarget,
  convertTo100,
  getNumbersArea,
} from "../../utils/Commom/fomarNumber";

function ModalArea({
  items,
  modals,
  setOverPlay,
  setModals,
  handleSubmit,
  arrMinMax,
}) {
  let number = +90;
  const [perSent1, setPerSent1] = useState(
    arrMinMax?.areaArr?.length > 0 ? arrMinMax?.areaArr[0] : 0
  );
  const [perSent2, setPerSent2] = useState(
    arrMinMax?.areaArr?.length > 0 ? arrMinMax?.areaArr[1] : 100
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
      setNumber1(convert100ToTarget(perSent1, "area"));
      setNumber2(convert100ToTarget(perSent2, "area"));
    } else {
      activeTrackId.style.left = `${perSent2}%`;
      activeTrackId.style.right = `${100 - perSent1}%`;
      setNumber1(convert100ToTarget(perSent2, "area"));
      setNumber2(convert100ToTarget(perSent1, "area"));
    }
  }, [perSent2, perSent1]);
  // lấy vị trí click
  const handleClickStack = (e) => {
    const stackEl = document.getElementById("stack");
    const stackRect = stackEl.getBoundingClientRect();
    let perSent =
      Math.round((e.clientX - stackRect.left) * 100) / stackRect.width;
    if (Math.abs(perSent - perSent1) <= Math.abs(perSent - perSent2)) {
      setPerSent1(perSent);
      setNumber1(convert100ToTarget(perSent, "area"));
    } else {
      setPerSent2(perSent);
      setNumber2(convert100ToTarget(perSent, "area"));
    }
  };
  const handleChangeRange = (value) => {
    let arrMaxMin;
    arrMaxMin = getNumbersArea(value);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPerSent1(0);
        setPerSent2(convertTo100(1, "area"));
      }
      if (arrMaxMin[0] === 20) {
        setPerSent1(0);
        setPerSent2(convertTo100(20, "area"));
      }
      if (arrMaxMin[0] === number) {
        setPerSent1(100);
        setPerSent2(100);
      }
    } else {
      setPerSent1(convertTo100(arrMaxMin[0], "area"));
      setPerSent2(convertTo100(arrMaxMin[1], "area"));
    }
  };

  const handleBeforeSubmit = () => {
    let min =
      perSent1 <= perSent2
        ? convert100ToTarget(perSent1, "area")
        : convert100ToTarget(perSent2, "area");
    let max =
      perSent1 <= perSent2
        ? convert100ToTarget(perSent2, "area")
        : convert100ToTarget(perSent1, "area");
    handleSubmit(
      {
        [`${"area"}Number`]: [min, max],
        ["area"]: `Từ ${min} - ${max} ${"m2"}`,
      },
      { [`${"area"}Arr`]: [perSent1, perSent2] }
    );
  };
  const onClose = () => {
    setModals(false);
    setOverPlay(false);
  };
  return (
    <>
      {modals ? (
        <div className="filter-popup has-footer js-filter-popup js-filter-popup-price show">
          <div className="filter-popup-header">
            <span className="header-label">CHỌN DIỆN TÍCH</span>{" "}
            <div
              className="popup-close js-filter-popup-close"
              onClick={onClose}
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
                    ? `Trên ${number2} ${"m2"}`
                    : `Từ ${number1} - ${number2}  ${"m2"}`}
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

                  <span
                    style={{ fontSize: "15px" }}
                    className="translate-x-5"
                    onClick={handleClickMax}
                  >
                    90m2
                  </span>
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

export default memo(ModalArea);
