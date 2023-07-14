import { AreaModel } from "../../models/area.model";

export interface AreaResponse {
  area: {
    err: number;
    msg: string;
    response: AreaModel[];
  };
}
