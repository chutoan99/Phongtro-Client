import { useQuery } from "react-query";
import { queryUserId } from "../services/user/user.service";

export const useQueryUserId = (userid: any) => {
  const queryKey = ["UserId", userid];

  const queryFn = async () => {
    const responseData = await queryUserId(userid);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
