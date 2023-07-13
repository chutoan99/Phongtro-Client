import { GraphQLClient } from "graphql-request";
import { NewPostResponse } from "./newPost.model";
import { PostResponse } from "./post.model";
import InputNewPost from "../../graphql/arguments/input_new_post.args";
import InputPost from "../../graphql/arguments/input_post.args";
import { PostIdResponse } from "./postId.model";

const postFilePath = require("../../graphql/queries/post.graphql");
const postIdFilePath = require("../../graphql/queries/postId.graphql");
const newPostFilePath = require("../../graphql/queries/newPost.graphql");

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryPosts = async (payloadPost: InputPost) => {
  try {
    const response: PostResponse = await graphQLClient.request(postFilePath, {
      input: { ...payloadPost },
    });
    if (response.post.err === 0) {
      return response.post.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch  posts");
  }
};

export const queryPostId = async (postId: string) => {
  try {
    const response: PostIdResponse = await graphQLClient.request(
      postIdFilePath,
      {
        postId: postId,
      }
    );
    if (response.postId.err === 0) {
      return response.postId.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch postid");
  }
};

export const queryNewPosts = async (payloadNewPost: InputNewPost) => {
  try {
    const response: NewPostResponse = await graphQLClient.request(
      newPostFilePath,
      {
        input: { ...payloadNewPost },
      }
    );
    if (response.newPost.err === 0) {
      return response.newPost.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch new posts");
  }
};
