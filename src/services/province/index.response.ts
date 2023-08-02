import { ProvinceModel } from "../../models/province.model";

export interface ProvinceResponse {
  province: {
    err: number;
    msg: string;
    response: ProvinceModel[];
  };
}
