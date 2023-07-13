import { useQuery } from "react-query";
import { queryCategories } from "../services/category/category.service";

export const useQueryCategories = () => {
  return useQuery("Category", () => queryCategories());
};
