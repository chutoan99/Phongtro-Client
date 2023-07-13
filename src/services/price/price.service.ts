import { GraphQLClient } from "graphql-request";
import { PriceResponse } from "./price.model";

const priceFilePath = require("../../graphql/queries/price.graphql");
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryPrices = async () => {
  try {
    const response: PriceResponse = await graphQLClient.request(priceFilePath);
    if (response.price.err === 0) {
      return response.price.response;
    }
  } catch (error) {
    throw new Error("Failed to fetch price");
  }
};
