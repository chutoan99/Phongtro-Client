import config from "../configs/axios";
import { categorySliceActions } from "../redux/category.slice";
import { CategoryQuery } from "../graphql/queries/category";

export const GetNavigation = async (dispatch) => {
  try {
    dispatch(categorySliceActions.fetchCategoryStart());
    const response = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(CategoryQuery),
    });
    if (response.status === 200) {
      dispatch(
        categorySliceActions.fetchCategorySuccess(
          response.data.data.category.response
        )
      );
    } else {
      dispatch(
        categorySliceActions.fetchCategoryFailed(
          response.data.data.category.msg
        )
      );
    }
  } catch (error) {
    dispatch(categorySliceActions.fetchCategoryFailed(error));
  }
};
