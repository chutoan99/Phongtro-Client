export interface ProvinceResponse {
  data: {
    province: {
      err: number;
      msg: string;
      response: Province[];
    };
  };
}

export interface Province {
  code: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  value: string;
}
