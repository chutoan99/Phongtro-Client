export interface CategoryResponse {
  data: {
    Category: {
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
  value: string;
  updatedAt: Date;
}
