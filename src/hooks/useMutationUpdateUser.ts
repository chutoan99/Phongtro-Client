import { useQuery } from "react-query";
import { mutationUpdateUser } from "../services/user/index.service";
import InputUpdateUser from "../graphql/arguments/update_user.args";

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
