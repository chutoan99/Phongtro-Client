export interface ProvinceResponse {
  province: {
    err: number;
    msg: string;
    response: ProvinceModel[];
  };
}

export interface ProvinceModel {
  code: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  value: string;
}
