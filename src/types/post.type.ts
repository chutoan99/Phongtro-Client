export interface PostResponse {
  data: {
    post: {
      err: number;
      msg: string;
      pageNumber: number;
      pageSize: number;
      response: Post[];
      total: number;
    };
  };
}

export interface Post {
  address: string;
  areaCode: string;
  areaNumber: number;
  attributes: Attributes;
  attributesId: string;
  categoryCode: string;
  createdAt: Date;
  description: string;
  id: string;
  imagesId: string;
  labelCode: string;
  listImage: ListImage;
  overviewId: string;
  overviews: Overviews;
  priceCode: string;
  priceNumber: number;
  provinceCode: string;
  start: string;
  title: string;
  updatedAt: Date;
  user: User;
  userId: string;
}

export interface Attributes {
  acreage: string;
  createdAt: Date;
  hashtag: string;
  id: string;
  price: string;
  updatedAt: Date;
  published: string;
}

export interface ListImage {
  createdAt: Date;
  id: string;
  image: string;
  updatedAt: Date;
  postImg: string;
  total: number;
}

export interface Overviews {
  area: string;
  bonus: string;
  code: string;
  created: string;
  createdAt: Date;
  expired: string;
  id: string;
  target: string;
  type: string;
  updatedAt: Date;
}

export interface User {
  createdAt: Date;
  id: string;
  name: string;
  password: string;
  phone: string;
  updatedAt: Date;
  zalo: string;
  avatar: string;
}
