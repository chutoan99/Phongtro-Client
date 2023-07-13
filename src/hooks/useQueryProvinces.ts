import { useQuery } from "react-query";
import { queryProvinces } from "../services/province/province.service";

export const useQueryProvinces = () => {
  return useQuery("Province", () => queryProvinces());
};
