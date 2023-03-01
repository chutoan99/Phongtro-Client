import { useSelector } from "react-redux";
import { AppState } from "../../app/store";
import { directoryRental, newPost } from "../../utils/constant";
import { subLink } from "../../utils/subLink";
import AsideAcreage from "./aside-acreage";
import AsideDirectoryRental from "./aside-directory-rental";
import AsideNewNews from "./aside-new-news";
import AsideNewPost from "./aside-new-post";
import AsidePrice from "./aside-price";
import AsideSubLink from "./aside-subLink";

function Aside({}) {
  const { area, price } = useSelector((state: AppState) => state);
  const { newPosts } = useSelector((state: AppState) => state.post);

  return (
    <>
      <AsideDirectoryRental item={directoryRental} />
      <AsidePrice item={price?.data} />
      <AsideAcreage item={area} />
      <AsideNewPost item={newPosts.data} />
      <AsideNewNews item={newPost} />
      <AsideSubLink item={subLink} />
    </>
  );
}
export default Aside;
