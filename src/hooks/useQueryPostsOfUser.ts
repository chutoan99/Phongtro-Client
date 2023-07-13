import { useQuery } from "react-query";
import { queryPostsOfUser } from "../services/user/user.service";

export const useQueryPostsOfUser = (userid: string) => {
  return useQuery(["Post_User", userid], () => queryPostsOfUser(userid));
};
