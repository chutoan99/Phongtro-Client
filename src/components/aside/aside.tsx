import AsideAcreage from "./aside-acreage";
import AsideDirectoryRental from "./aside-directory-rental";
import AsideNewNews from "./aside-new-news";
import AsideNewPost from "./aside-new-post";
import AsidePrice from "./aside-price";
import AsideSubLink from "./aside-subLink";

function Aside({}) {
  return (
    <>
      <AsideDirectoryRental />
      <AsidePrice />
      <AsideAcreage />
      <AsideNewPost />
      <AsideNewNews />
      <AsideSubLink />
    </>
  );
}
export default Aside;
