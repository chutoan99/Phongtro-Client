import { useMutation } from "react-query";
import { mutationDeletePost } from "../services/post/index.service";

export const useMutationDeletePost = (postId: any) => {
  const mutation = useMutation(() => mutationDeletePost(postId));
  return mutation;
};
