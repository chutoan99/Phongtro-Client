import { useQuery } from "react-query";
import { queryPosts } from "../services/post/post.service";
import InputPost from "../graphql/arguments/input_post.args";

export const useQueryPosts = (payloadPost: InputPost) => {
  const queryKey = [
    "Posts",
    payloadPost?.pageNumber,
    payloadPost?.categoryCode,
  ];

  const queryFn = async () => {
    const responseData = await queryPosts(payloadPost);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
