import { areaActions } from "../redux/area.slice";
import config from "../configs/axios";
import { areaQuery } from "../graphql/queries/area";
export const getArea = async (dispatch: any) => {
  try {
    dispatch(areaActions.fetchAreaStart());
    const response = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(areaQuery),
    });
    if (response.status === 200) {
      dispatch(areaActions.fetchAreaSuccess(response.data.data.area.response));
    } else {
      dispatch(areaActions.fetchAreaFailed(response.data.data.area.msg));
    }
  } catch (error) {
    dispatch(areaActions.fetchAreaFailed(error));
  }
};
