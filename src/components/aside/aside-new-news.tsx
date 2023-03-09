import { newPost } from "../../utils/constant";

function AsideNewNews() {
  return (
    <section className="section section-sublink">
      <div className="section-header">
        <span className="section-title">{newPost.header}</span>
      </div>
      <ul className="list-links clearfix">
        {newPost?.lists.map((ele: any, index: number) => (
          <li key={index}>
            <a href="# " title={ele}>
              {ele}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default AsideNewNews;
