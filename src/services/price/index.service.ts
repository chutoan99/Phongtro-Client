import Swal from "sweetalert2";
import { GraphQLClient } from "graphql-request";
import { PriceResponse } from "./price.response";

const priceFilePath = require("../../graphql/queries/price.graphql");
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV);

export const queryPrices = async () => {
  try {
    const response: PriceResponse = await graphQLClient.request(priceFilePath);
    if (response.price.err === 0) {
      // Swal.fire("Oop !", response.price.msg, "success");
      return response.price.response;
    } else {
      Swal.fire("Oop !", response.price.msg, "error");
      return;
    }
  } catch (error) {
    throw new Error("Failed to fetch price");
  }
};
