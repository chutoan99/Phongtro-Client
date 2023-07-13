import { useQuery } from "react-query";
import { queryCategories } from "../services/category/category.service";

export const useQueryCategories = () => {
  const queryKey = ["Categories"];

  const queryFn = async () => {
    const responseData = await queryCategories();
    return responseData;
  };

  const queryResult = useQuery(queryKey, queryFn);

  return { ...queryResult };
};
