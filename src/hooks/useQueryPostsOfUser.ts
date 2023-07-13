import { useQuery } from "react-query";
import { queryPostsOfUser } from "../services/user/user.service";

export const useQueryPostsOfUser = (userid: any) => {
  const queryKey = ["PostsOfUser", userid];

  const queryFn = async () => {
    const responseData = await queryPostsOfUser(userid);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
