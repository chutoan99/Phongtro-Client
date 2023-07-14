export interface InputNewPost {
  pageSize: number;
  pageNumber: number;
}

export interface InputPost {
  pageSize: number;
  pageNumber: number;
  orderBy: string;
  direction: string;
  title: string;
  start: string;
  address: string;
  categoryCode: string;
  provinceCode: string;
  areaNumber: [];
  priceNumber: [];
}

export interface InputCreatePost {
  areaNumber: number;
  priceNumber: number;
  priceCode: string;
  areaCode: string;
  categoryCode: string;
  title: string;
  images: string[];
  address: string;
  target: string;
  type: string;
  province: string;
  description: string;
  label: string;
  userid: string;
  start: 5;
}

export interface InputUpdatePost {}
