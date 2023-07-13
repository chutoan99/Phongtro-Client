import { useQuery } from "react-query";
import { queryUserId } from "../services/user/user.service";

export const useQueryUserId = (userid: string) => {
  return useQuery(["User", userid], () => queryUserId(userid));
};
