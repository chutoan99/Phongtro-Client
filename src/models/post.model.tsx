export interface PostModel {
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
    postImg: string;
    total: string;
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
    avatar: string;
  };
}
export interface PostIdModel {
  address: string;
  areaCode: string;
  areaNumber: number;
  attributesId: string;
  categoryCode: string;
  createdAt: Date;
  description: string;
  id: string;
  imagesId: string;
  labelCode: string;
  overviewId: string;
  priceCode: string;
  priceNumber: number;
  provinceCode: string;
  start: string;
  title: string;
  updatedAt: Date;
  userId: string;
  attributes: {
    acreage: string;
    createdAt: Date;
    hashtag: string;
    id: string;
    price: string;
    published: string;
    updatedAt: Date;
  };
  listImage: {
    createdAt: Date;
    id: string;
    image: string;
    postImg: string;
    total: number;
    updatedAt: Date;
  };
  overviews: {
    area: string;
    bonus: string;
    code: string;
    created: string;
    createdAt: Date;
    id: string;
    expired: string;
    target: string;
    type: string;
    updatedAt: Date;
  };
  user: {
    avatar: string;
    createdAt: Date;
    id: string;
    password: string;
    name: string;
    phone: string;
    updatedAt: Date;
    zalo: string;
  };
}
export interface NewPostModel {
  address: string;
  id: string;
  attributesId: string;
  attributes: {
    price: number;
    acreage: number;
    published: boolean;
  };
  listImage: {
    postImg: string;
  };
  title: string;
  updatedAt: string;
}
