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
  updatedAt: Date;
  id: string;
  value: string;
}
