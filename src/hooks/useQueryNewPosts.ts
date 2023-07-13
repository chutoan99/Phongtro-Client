import { useQuery } from "react-query";
import { queryNewPosts } from "../services/post/post.service";
import InputNewPost from "../graphql/arguments/input_new_post.args";

export const useQueryNewPosts = (payloadNewPost: InputNewPost) => {
  return useQuery("NewPost", () => queryNewPosts(payloadNewPost));
};
