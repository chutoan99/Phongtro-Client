import { useQuery } from "react-query";
import { queryProvinces } from "../services/province/province.service";

export const useQueryProvinces = () => {
  const queryKey = ["Provinces"];

  const queryFn = async () => {
    const responseData = await queryProvinces();
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
