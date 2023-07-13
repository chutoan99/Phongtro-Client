import { GraphQLClient } from "graphql-request";
import { CategoryResponse } from "./category.model";

const categoryFilePath = require("../../graphql/queries/category.graphql");
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryCategories = async () => {
  try {
    const response: CategoryResponse = await graphQLClient.request(
      categoryFilePath
    );
    if (response.category.err === 0) {
      return response.category.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch category");
  }
};
