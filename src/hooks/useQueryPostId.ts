import { useQuery } from "react-query";
import { queryPostId } from "../services/post/index.service";

export const useQueryPostId = (postId: any) => {
  const queryKey = ["PostId", postId];

  const queryFn = async () => {
    const responseData = await queryPostId(postId);
    return responseData;
  };
  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
