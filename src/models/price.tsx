export interface Welcome {
  data: Data;
}

export interface Data {
  price: Price;
}

export interface PriceResponse {
  err: number;
  msg: string;
  response: Price[];
}

export interface Price {
  code: string;
  createdAt: Date;
  id: string;
  order: number;
  updatedAt: Date;
  value: string;
}
