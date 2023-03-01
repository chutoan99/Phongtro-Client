export interface AreaResponse {
  data: {
    area: {
      err: number;
      msg: string;
      response: Area[];
    };
  };
}
export interface Area {
  code: string;
  createdAt: Date;
  id: string;
  order: number;
  updatedAt: Date;
  value: string;
}
