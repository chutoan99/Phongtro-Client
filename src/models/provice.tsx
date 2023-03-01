export interface Welcome {
  data: Data;
}

export interface Data {
  province: Province;
}

export interface ProvinceResponse {
  err: number;
  msg: string;
  response: Province[];
}

export interface Province {
  code: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  value: string;
}
