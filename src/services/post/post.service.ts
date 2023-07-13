import { GraphQLClient } from "graphql-request";
import { NewPostResponse } from "./newPost.model";
import { PostResponse } from "./post.model";
import InputNewPost from "../../graphql/arguments/input_new_post.args";
import InputPost from "../../graphql/arguments/input_post.args";

const postFilePath = require("../../graphql/queries/post.graphql");
const newPostFilePath = require("../../graphql/queries/newPost.graphql");

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryPosts = async (payloadPost: InputPost) => {
  try {
    const response: PostResponse = await graphQLClient.request(postFilePath, {
      input: { ...payloadPost },
    });
    if (response.post.err === 0) {
      const pageSize = response.post.pageSize;
      const total = response.post.total;
      const responseData = response.post.response;
      return { total, pageSize, responseData };
    }
  } catch (error) {
    throw new Error("Failed to fetch  posts");
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
