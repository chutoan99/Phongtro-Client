// LIBRARY
import { useRouter } from "next/router";
//  ARGUMENTS
import { InputNewPost } from "../../graphql/arguments/post.args";
// APP
import { useQueryAreas } from "../../hooks/useQueryAreas";
import { useQueryPrices } from "../../hooks/useQueryPrices";
import { useQueryNewPosts } from "../../hooks/useQueryNewPosts";
import { directoryRental, newPost } from "../../utils/constant";
// HOOKS
import { subLink } from "../../utils/subLink";
import {
  AsideDirectoryRental,
  AsidePrice,
  AsideNewPost,
  AsideNewNews,
  AsideSubLink,
  AsideArea,
} from "../../components";

function Aside() {
  const router = useRouter();
  const { pathname } = router;
  const routeSegment = pathname.split("/")[1];
  const payloadNewPost: InputNewPost = {
    pageSize: 10,
    pageNumber: 1,
  };
  const { data: dataAsideAreas, isLoading: isLoadingAsideArea } =
    useQueryAreas();
  const { data: dataAsidePrices, isLoading: isLoadingAsidePrices } =
    useQueryPrices();
  const { data: dataAsideNewPost, isLoading: isLoadingAsideNewPost } =
    useQueryNewPosts(payloadNewPost);

  return (
    <div id="aside">
      <AsideDirectoryRental data={directoryRental} />
      <AsidePrice data={dataAsidePrices} isLoading={isLoadingAsidePrices} />
      <AsideArea data={dataAsideAreas} isLoading={isLoadingAsideArea} />
      <AsideNewPost
        data={dataAsideNewPost}
        isLoading={isLoadingAsideNewPost}
        path={routeSegment}
      />
      <AsideNewNews data={newPost} />
      <AsideSubLink data={subLink} />
    </div>
  );
}
export default Aside;
