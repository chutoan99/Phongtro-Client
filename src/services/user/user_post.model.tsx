export interface UserPostResponse {
  userId: {
    err: number;
    msg: string;
    response: User;
  };
}

export interface User {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
  phone: string;
  zalo: string;
  updatedAt: string;
  post: PostUserModel[] | null;
}

interface PostUserModel {
  id: string;
  title: string;
  start: string;
  labelCode: string;
  address: string;
  attributesId: string;
  categoryCode: string;
  priceCode: string;
  areaCode: string;
  provinceCode: string;
  description: string;
  userId: string;
  overviewId: string;
  imagesId: string;
  priceNumber: number;
  areaNumber: number;
  createdAt: string;
  updatedAt: string;
  listImage: {
    id: string;
    total: number;
    image: string;
    postImg: string;
    createdAt: string;
    updatedAt: string;
  }[];
  attributes: {
    id: string;
    price: number;
    acreage: number;
    published: boolean;
    hashtag: string;
    createdAt: string;
    updatedAt: string;
  };
  overviews: {
    id: string;
    code: string;
    area: string;
    type: string;
    target: string;
    created: string;
    expired: string;
    bonus: string;
    createdAt: string;
    updatedAt: string;
  }[];
}
