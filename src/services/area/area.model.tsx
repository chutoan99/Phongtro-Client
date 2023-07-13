export interface AreaResponse {
  area: {
    err: number;
    msg: string;
    response: AreaModel[];
  };
}

export interface AreaModel {
  id: string;
  createdAt: Date;
  order: number;
  updatedAt: Date;
  value: string;
  code: string;
}
