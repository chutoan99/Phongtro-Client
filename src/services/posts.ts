import { postActions } from "../redux/post.slice";
import config from "../configs/axios";

import axios from "axios";
import { postQuery, postIdQuery, newPostQuery } from "../graphql/queries/post";

export const GetPostId = async (id, dispatch) => {
  dispatch(postActions.fetchPostsIdStart());
  try {
    const response = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(postIdQuery(id)),
    });
    if (response.status === 200) {
      dispatch(postActions.fetchPostsIdSuccess(response.data.data.postId));
    } else {
      dispatch(postActions.fetchPostsIdFailed(response.data.data.postId));
    }
  } catch (error) {
    dispatch(postActions.fetchPostsIdFailed(error));
  }
};

export const GetNewPosts = async (pageNumber, pageSize, dispatch) => {
  try {
    dispatch(postActions.fetchNewPostStart());
    const response = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(newPostQuery(pageNumber, pageSize)),
    });
    if (response.status === 200) {
      dispatch(postActions.fetchNewPostsSuccess(response.data.data.newPost));
    } else {
      dispatch(postActions.fetchNewPostsFailed(response.data.data.newPost));
    }
  } catch (error) {
    dispatch(postActions.fetchNewPostsFailed(error));
  }
};

export const GetPosts = async (pageNumber, pageSize, dispatch) => {
  try {
    dispatch(postActions.fetchPostStart());
    const response = await config({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(postQuery(pageNumber, pageSize)),
    });
    if (response.status === 200) {
      dispatch(postActions.fetchPostSuccess(response.data.data.post));
    } else {
      dispatch(postActions.fetchPostFailed(response.data.data.post));
    }
  } catch (error) {
    dispatch(postActions.fetchPostFailed(error));
  }
};

export const apiPosted = async (query, dispatch) => {
  const token = JSON.parse(localStorage.getItem("token")).token;
  try {
    const response = await config({
      method: "get",
      url: `/api/v1/post/getLimitAdmin`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      dispatch(postActions.fetchPostedSuccess(response?.data?.response));
    } else {
      console.log("loi server");
    }
  } catch (error) {
    console.log(error);
  }
};

export const apiUploadImages = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/dxcershra/image/upload/`,
        data: formData,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiCreatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    try {
      const response = await config({
        method: "post",
        url: `/api/v1/post/createNewPost`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
