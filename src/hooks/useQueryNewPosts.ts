import { useQuery } from "react-query";
import { queryNewPosts } from "../services/post/index.service";
import InputNewPost from "../graphql/arguments/new_post.args";

export const useQueryNewPosts = (payloadNewPost: InputNewPost) => {
  const queryKey = ["NewPosts"];

  const queryFn = async () => {
    const responseData = await queryNewPosts(payloadNewPost);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
