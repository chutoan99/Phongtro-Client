export interface NewPostResponse {
  newPost: {
    err: number;
    msg: string;
    total: number;
    pageNumber: number;
    pageSize: number;
    response: NewPostModel;
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
