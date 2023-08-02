import { useQuery } from "react-query";
import { mutationUpdateUser, queryUserId } from "./index.service";
import { InputUpdateUser } from "../../graphql/arguments/user.args";

export const useQueryUserId = (userid: string) => {
  const queryKey = ["UserId", userid];
  const queryFn = async () => {
    const responseData = await queryUserId(userid);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};

export const useMutationUpdatePost = (
  userId: string,
  payloadUpdateUser: InputUpdateUser
) => {
  const queryKey = ["Update_user"];

  const queryFn = async () => {
    const responseData = await mutationUpdateUser(userId, payloadUpdateUser);
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
