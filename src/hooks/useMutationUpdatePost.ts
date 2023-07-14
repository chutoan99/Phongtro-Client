import { useQuery } from "react-query";
import { mutationUpdatePost } from "../services/post/index.service";
import InputUpdatePost from "../graphql/arguments/update_post.args";

export const useMutationUpdatePost = (
  postId: string,
  payloadUpdatePost: InputUpdatePost
) => {
  const queryKey = ["Update_post"];

  const queryFn = async () => {
    const responseData = await mutationUpdatePost(postId, payloadUpdatePost);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
