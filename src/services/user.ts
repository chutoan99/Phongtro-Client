import config from "../configs/axios";
import { userActions } from "../redux/user.slice";
import { userIdQuery } from "../graphql/queries/user";

export const GetCurrentUser = async (dispatch) => {
  try {
    const id = "cd010a38-b5a5-4f0f-86a3-1b5ccd625d18";
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
    if (response.status === 200) {
      dispatch(
        userActions.currentUserSuccess(response.data.data.userId.response)
      );
    } else {
      dispatch(userActions.currentUserFailed(response.data.data.userId.msg));
    }
  } catch (error) {
    dispatch(userActions.currentUserFailed(error));
  }
};
