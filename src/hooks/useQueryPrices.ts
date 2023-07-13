import { useQuery } from "react-query";
import { queryPrices } from "../services/price/price.service";

export const useQueryPrices = () => {
  return useQuery("Price", () => queryPrices());
};
