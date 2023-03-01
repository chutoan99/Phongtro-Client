export interface Welcome {
  data: Data;
}

export interface Data {
  category: Category;
}

export interface CategoryResponse {
  err: number;
  msg: string;
  response: Category[];
}

export interface Category {
  code: string;
  createdAt: Date;
  header: string;
  id: string;
  subHeader: string;
  updatedAt: Date;
  value: string;
}
