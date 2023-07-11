function ModalProvince({
  items,
  modals,
  setModals,
  setOverPlay,
  handleSubmit,
  queries,
}) {
  const onClose = () => {
    setModals(false);
    setOverPlay(false);
  };
  const onSubmit = (item: any) => {
    handleSubmit({
      ["price"]: item.value,
      [`${"price"}Code`]: item.code,
    });
  };

  return (
    <>
      {modals ? (
        <div className="filter-popup js-filter-popup js-filter-popup-estate-type show">
          <div className="filter-popup-header">
            <span className="header-label">CHỌN GIÁ</span>
            <div
              className="popup-close js-filter-popup-close"
              onClick={onClose}
            >
              Đóng
            </div>
          </div>
          <div className="filter-popup-content">
            <div
              id="filter-popup-estate-type-option"
              className="filter-list-option"
            >
              <ul>
                {items?.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="selected"
                    onClick={() => onSubmit(item)}
                  >
                    <input
                      type="radio"
                      name="price"
                      id={item?.code}
                      value={item?.code}
                      checked={
                        item.code === queries[`${"price"}Code`] ? true : false
                      }
                      style={{ marginRight: "10px" }}
                    />
                    <label
                      className="items-center flex  text-[1rem] cursor-pointer"
                      htmlFor={item?.code}
                    >
                      {item?.value}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalProvince;
