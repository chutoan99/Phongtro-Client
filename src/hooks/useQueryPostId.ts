import { useQuery } from "react-query";
import { queryPostId } from "../services/post/post.service";

export const useQueryPostId = (postId: any) => {
  const queryKey = ["PostId", postId];

  const queryFn = async () => {
    const responseData = await queryPostId(postId);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
