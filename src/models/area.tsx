export interface Welcome {
  data: Data;
}

export interface Data {
  area: Area;
}

export interface AreaResponse {
  err: number;
  msg: string;
  response: Area[];
}

export interface Area {
  id: string;
  createdAt: Date;
  order: number;
  updatedAt: Date;
  value: string;
  code: string;
}
