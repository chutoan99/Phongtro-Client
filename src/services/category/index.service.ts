import Swal from "sweetalert2";
import { GraphQLClient } from "graphql-request";
import { CategoryResponse } from "./index.response";

const categoryFilePath = require("../../graphql/queries/category.graphql");
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryCategories = async () => {
  try {
    const response: CategoryResponse = await graphQLClient.request(
      categoryFilePath
    );
    if (response.category.err === 0) {
      return response.category.response;
    } else {
      Swal.fire("Oop !", response.category.msg, "error");
      return;
    }
  } catch (error) {
    throw new Error("Failed to fetch category");
  }
};
