import { CategoryModel } from "../../models/category.model";

export interface CategoryResponse {
  category: {
    err: number;
    msg: string;
    response: CategoryModel[];
  };
}
