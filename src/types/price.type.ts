export interface PriceResponse {
  data: {
    price: {
      err: number;
      msg: string;
      response: Price[];
    };
  };
}

export interface Price {
  code: string;
  createdAt: Date;
  id: string;
  order: number;
  updatedAt: Date;
  value: string;
}
