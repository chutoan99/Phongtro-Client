import config from "../configs/axios";
import { userActions } from "../redux/user.slice";
import { userIdQuery } from "../graphql/queries/user";
import { authActions } from "../redux/auth.slice";

export const GetCurrentUser = async (id: string, dispatch) => {
  try {
    dispatch(userActions.currentUserStart());
    const response = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(userIdQuery(id)),
    });
    if (response?.status === 200) {
      dispatch(authActions.updateIdUser());
      dispatch(
        userActions.currentUserSuccess(response?.data?.data?.userId?.response)
      );
    } else {
      dispatch(
        userActions.currentUserFailed(response?.data?.data?.userId?.msg)
      );
    }
  } catch (error) {
    dispatch(userActions.currentUserFailed(error));
  }
};
