function ModalCategory({
  items,
  isModals,
  setModals,
  setOverPlay,
  handleSubmit,
  queries,
}) {
  const onSubmit = (item: any) => {
    handleSubmit({
      ["category"]: item.value,
      [`${"category"}Code`]: item.code,
    });
  };
  const onClose = () => {
    setModals(false);
    setOverPlay(false);
  };
  return (
    <>
      {isModals ? (
        <div className="filter-popup js-filter-popup js-filter-popup-estate-type show">
          <div className="filter-popup-header">
            <span className="header-label">CHỌN LOẠI BẤT ĐỘNG SẢN</span>
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
                      name="category"
                      id={item?.code}
                      value={item?.code}
                      defaultChecked={
                        item.code === queries[`${"category"}Code`]
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

export default ModalCategory;
