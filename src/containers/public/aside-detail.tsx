// LIBRARY
import { useRouter } from "next/router";

//  ARGUMENTS
import { InputNewPost } from "../../graphql/arguments/post.args";

// HOOKS
import { useQueryNewPosts } from "../../hooks/useQueryNewPosts";
import { useQueryPostId } from "../../hooks/useQueryPostId";
// APP
import { AreaHcm } from "../../utils/area";
import { subLink } from "../../utils/subLink";
import {
  AsideAcreage,
  AsideNewHot,
  AsideNewPost,
  AsideSubLink,
  Author,
} from "../../components";

function AsideDetail() {
  const router = useRouter();

  const { id } = router.query;
  const { pathname } = router;
  const routeSegment = pathname.split("/")[1];
  // const [routeSegment, setRouteSegment] = useState(String);
  // useEffect(() => {
  //   if (id) {
  //     console.log("có");
  //     setRouteSegment("/");
  //   } else {
  //     setRouteSegment(p);
  //   }
  //   console.log(pathname, "pathname");
  // }, [pathname, id]);

  const payloadNewPost: InputNewPost = {
    pageSize: 10,
    pageNumber: 1,
  };
  const { data: dataAsideNewPost, isLoading: isLoadingAsideNewPost } =
    useQueryNewPosts(payloadNewPost);

  const { data: dataAsideUser } = useQueryPostId(id);
  return (
    <aside id="aside">
      <Author item={dataAsideUser?.user} />
      <AsideNewPost
        data={dataAsideNewPost}
        isLoading={isLoadingAsideNewPost}
        path={routeSegment}
      />
      <AsideNewHot />
      <AsideAcreage data={AreaHcm} />
      <AsideSubLink data={subLink} />
    </aside>
  );
}
export default AsideDetail;
