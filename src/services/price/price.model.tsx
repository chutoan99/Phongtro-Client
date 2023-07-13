export interface PriceResponse {
  price: {
    err: number;
    msg: string;
    response: PriceModel[];
  };
}

export interface PriceModel {
  code: string;
  createdAt: Date;
  id: string;
  order: number;
  updatedAt: Date;
  value: string;
}
