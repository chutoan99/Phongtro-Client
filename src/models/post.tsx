export interface Welcome {
  data: Data;
}

export interface Data {
  post: Post;
}

export interface PostResponse {
  err: number;
  msg: string;
  response: Post[];
}

export interface Post {
  address: string;
  areaCode: string;
  areaNumber: number;
  attributes: {
    acreage: string;
    createdAt: Date;
    hashtag: string;
    id: string;
    price: string;
    published: string;
    updatedAt: Date;
  };
  attributesId: string;
  categoryCode: string;
  createdAt: Date;
  description: string;
  id: string;
  imagesId: string;
  labelCode: string;
  listImage: {
    createdAt: Date;
    id: string;
    image: string;
    updatedAt: Date;
  };
  overviewId: string;
  overviews: {
    createdAt: Date;
    area: string;
    bonus: string;
    created: string;
    code: string;
    expired: string;
    id: string;
    target: string;
    type: string;
    updatedAt: Date;
  };
  priceCode: string;
  priceNumber: number;
  provinceCode: string;
  start: string;
  title: string;
  updatedAt: Date;
  userId: string;
  user: {
    createdAt: Date;
    id: string;
    name: string;
    password: string;
    phone: string;
    zalo: string;
    updatedAt: Date;
  };
}
