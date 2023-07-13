import { useQuery } from "react-query";
import { queryPosts } from "../services/post/post.service";
import InputPost from "../graphql/arguments/input_post.args";
import { useState } from "react";

export const useQueryPosts = (payloadPost: InputPost) => {
  const [total, setTotal] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const { data: responseData, ...queryResult } = useQuery(
    ["Post", payloadPost.pageNumber, payloadPost.categoryCode],
    async () => {
      const { responseData, total, pageSize } = await queryPosts(payloadPost);
      setTotal(total);
      setPageSize(pageSize);
      return responseData;
    }
  );

  const dataPost = { responseData, total, pageSize }; // Tạo đối tượng mới với responseData và total

  return { ...queryResult, ...dataPost }; // Kết hợp queryResult và dataPost để trả về
};
