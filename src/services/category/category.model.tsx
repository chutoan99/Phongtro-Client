export interface CategoryResponse {
  category: {
    err: number;
    msg: string;
    response: CategoryModel[];
  };
}

export interface CategoryModel {
  code: string;
  createdAt: Date;
  header: string;
  id: string;
  subHeader: string;
  updatedAt: Date;
  value: string;
  path: string;
}
