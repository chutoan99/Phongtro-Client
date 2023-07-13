import { GraphQLClient } from "graphql-request";
import { UserResponse } from "./user.model";
import { UserPostResponse } from "./user_post.model";
const userIdFilePath = require("../../graphql/queries/userId.graphql");
const userPostsFilePath = require("../../graphql/queries/user_post.graphql");
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryUserId = async (userid: string) => {
  try {
    const response: UserResponse = await graphQLClient.request(userIdFilePath, {
      userId: userid,
    });
    if (response.userId?.err === 0) {
      return response.userId.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch current user");
  }
};

export const queryPostsOfUser = async (userid: string) => {
  try {
    const response: UserPostResponse = await graphQLClient.request(
      userPostsFilePath,
      {
        userId: userid,
      }
    );
    console.log(response, "response user post");
    if (response.userId.err === 0) {
      return response.userId.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch all post of user");
  }
};
