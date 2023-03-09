export interface AreaResponse {
  area: {
    err: number;
    msg: string;
    response: Area[];
  };
}

export interface Area {
  id: string;
  createdAt: Date;
  order: number;
  updatedAt: Date;
  value: string;
  code: string;
}
