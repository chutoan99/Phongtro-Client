import { PriceModel } from "../../models/price.model";

export interface PriceResponse {
  price: {
    err: number;
    msg: string;
    response: PriceModel[];
  };
}
