import { GraphQLClient } from "graphql-request";
import { ProvinceResponse } from "./province.model";

const provinceFilePath = require("../../graphql/queries/province.graphql");
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryProvinces = async () => {
  try {
    const response: ProvinceResponse = await graphQLClient.request(
      provinceFilePath
    );
    if (response.province.err === 0) {
      return response.province.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch Province");
  }
};
