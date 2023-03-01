import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types/post.type";

interface PostState {
  allPosts: {
    data: Post[];
    error: boolean;
    success: boolean;
    pageNumber: number;
    pageSize: number;
    total: number;
  };
  PostsId: {
    data: Post;
    error: boolean;
    success: boolean;
  };
  newPosts: {
    data: Post[];
    error: boolean;
    success: boolean;
    pageNumber: number;
    pageSize: number;
    total: number;
  };
  posted: {
    data: Post[];
    error: boolean;
    success: boolean;
    pageNumber: number;
    pageSize: number;
    total: number;
  };
}

const initialState: PostState = {
  allPosts: {
    data: [],
    error: false,
    success: false,
    pageNumber: 0,
    pageSize: 0,
    total: 0,
  },
  PostsId: {
    data: {} as Post,
    error: false,
    success: false,
  },
  newPosts: {
    data: [],
    error: false,
    success: false,
    pageNumber: 0,
    pageSize: 0,
    total: 0,
  },
  posted: {
    data: [],
    error: false,
    success: false,
    pageNumber: 0,
    pageSize: 0,
    total: 0,
  },
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // postAll
    fetchPostStart: (state) => {
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
        },
      };
    },
    fetchPostSuccess: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          success: true,
          data: action.payload.response,
          pageNumber: action.payload.pageNumber,
          pageSize: action.payload.pageSize,
          total: action.payload.total,
        },
      };
    },
    fetchPostFailed: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          error: action.payload.msg,
        },
      };
    },
    // post limit
    fetchPostsIdStart: (state) => {
      return {
        ...state,
        PostsId: {
          ...state.PostsId,
        },
      };
    },
    fetchPostsIdSuccess: (state, action: PayloadAction<any>) => {
      state.PostsId.success = true;
      state.PostsId.data = action.payload.response;
    },
    fetchPostsIdFailed: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        PostsId: {
          ...state.PostsId,
          error: action.payload.msg,
        },
      };
    },
    // newPosts
    fetchNewPostStart: (state) => {
      return {
        ...state,
        newPosts: {
          ...state.newPosts,
        },
      };
    },
    fetchNewPostsSuccess: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        newPosts: {
          ...state.newPosts,
          success: true,
          data: action.payload.response,
          pageNumber: action.payload.pageNumber,
          pageSize: action.payload.pageSize,
          total: action.payload.total,
        },
      };
    },
    fetchNewPostsFailed: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        newPosts: {
          ...state.newPosts,
          error: action.payload.msg,
        },
      };
    },
    // posted

    fetchPostedStart: (state) => {
      return {
        ...state,
        posted: {
          ...state.posted,
        },
      };
    },
    fetchPostedSuccess: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        posted: {
          ...state.posted,
          success: true,
          data: action.payload.response,
          pageNumber: action.payload.pageNumber,
          pageSize: action.payload.pageSize,
          total: action.payload.total,
        },
      };
    },
    fetchNewPostedFailed: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        posted: {
          ...state.posted,
          error: action.payload.msg,
        },
      };
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
