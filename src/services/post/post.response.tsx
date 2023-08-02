import { NewPostModel, PostIdModel, PostModel } from "../../models/post.model";

export interface PostResponse {
  post: {
    total: number;
    pageNumber: number;
    pageSize: number;
    totalPage: number;
    err: number;
    msg: string;
    response: PostModel[];
  };
}

export interface PostIdResponse {
  postId: {
    err: number;
    msg: string;
    response: PostIdModel;
  };
}

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

export interface DeletePostResponse {
  deletePost: {
    err: number;
    msg: string;
  };
}

export interface CreatePostResponse {
  createPost: {
    err: number;
    msg: string;
  };
}
