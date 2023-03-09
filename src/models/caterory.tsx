export interface CategoryResponse {
  data: {
    category: {
      err: number;
      msg: string;
      response: Category[];
    };
  };
}

export interface Category {
  code: string;
  createdAt: Date;
  header: string;
  id: string;
  subHeader: string;
  updatedAt: Date;
  value: string;
  path: string;
}
