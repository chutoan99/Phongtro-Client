export const renderStart = (start) => {
  let starts = [];
  for (let i = 1; i <= +start; i++) {
    starts.push(
      <span className="text-yellow">
        <i className="fa-solid fa-star"></i>
      </span>
    );
  }
  return starts;
};
