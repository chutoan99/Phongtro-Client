//? LIBRARY
import React from "react";
//? APP
import DetailLayout from "../layouts/detail.layout";
import { PostDetail } from "../containers/public";

export default function IndexDetail() {
  return <PostDetail />;
}
IndexDetail.Layout = DetailLayout;
