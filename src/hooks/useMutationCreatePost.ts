import { useMutation } from "react-query";
import { mutationCreatePost } from "../services/post/index.service";
import { InputCreatePost } from "../graphql/arguments/post.args";

export const useMutationCreatePost = (payloadCreatePost: InputCreatePost) => {
  const mutation = useMutation(() => mutationCreatePost(payloadCreatePost));
  return mutation;
};
