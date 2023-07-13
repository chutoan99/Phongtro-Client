import { useQuery } from "react-query";
import { queryAreas } from "../services/area/area.service";

export const useQueryAreas = () => {
  return useQuery("Area", () => queryAreas());
};
