interface interfaceInput {
  title?: any;
  id?: any;
  styleInput?: any;
  bg?: any;
  placeholder: any;
  sub?: any;
  value?: any;
  span?: any;
  setValue?: any;
}

function Input({
  title,
  id,
  styleInput,
  bg,
  placeholder,
  sub,
  value,
  span,
  setValue,
}: interfaceInput) {
  const style = `pl-[10px] p-[7px] h-26px text-[1.2rem] rounded-[5px] ${bg} w-full outline-none`;
  const WITH = `flex relative  ${styleInput}`;
  return (
    <div className="gap-[10px] grid">
      <label className="text-[1.2rem] font-medium" htmlFor={id}>
        {title}
      </label>
      <div className={WITH}>
        <input
          style={{ border: "1px solid #ccc" }}
          id={id}
          value={value}
          type="text"
          className={style}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />

        {sub && (
          <div
            className="bg-[#e9ecef] w-[60px]  h-full  flex items-center justify-center text-[1.1rem]"
            style={{
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            {sub}
          </div>
        )}
      </div>
      {span && <span className="mb-[10px]">{span}</span>}
    </div>
  );
}
export default Input;
