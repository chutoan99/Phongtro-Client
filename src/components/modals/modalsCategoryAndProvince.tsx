function ModalsCategoryAndProvince({
  items,
  modals,
  setModals,
  text,
  setOverPlay,
  name,
  handleSubmit,
  queries,
}) {
  const isLoseModel = () => {
    setModals(false);
  };
  return (
    <>
      {modals ? (
        <div className="filter-popup js-filter-popup js-filter-popup-estate-type show">
          <div className="filter-popup-header">
            <span className="header-label">{text}</span>
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
            <div
              id="filter-popup-estate-type-option"
              className="filter-list-option"
            >
              {(name === "category" || name === "province") && (
                <ul>
                  {items?.map((item: any, index: number) => (
                    <li
                      key={index}
                      className="selected"
                      onClick={() =>
                        handleSubmit({
                          [name]: item.value,
                          [`${name}Code`]: item.code,
                        })
                      }
                    >
                      <input
                        type="radio"
                        name={name}
                        id={item?.code}
                        value={item?.code}
                        checked={
                          item.code === queries[`${name}Code`] ? true : false
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
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalsCategoryAndProvince;
