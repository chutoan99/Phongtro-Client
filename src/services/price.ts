import { priceActions } from "../redux/price.slice";
import config from "../configs/axios";
import { PriceQuery } from "../graphql/queries/price";

export const getPrices = async (dispatch) => {
  dispatch(priceActions.fetchPriceStart());
  try {
    const response = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(PriceQuery),
    });
    if (response.status === 200) {
      dispatch(
        priceActions.fetchPriceSuccess(response.data.data.price.response)
      );
    } else {
      dispatch(priceActions.fetchPriceFailed(response.data.data.price.msg));
    }
  } catch (error) {
    dispatch(priceActions.fetchPriceFailed(error));
  }
};
