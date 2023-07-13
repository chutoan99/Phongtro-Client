// APP

import { Container } from "../containers/public/index";
import DefaultLayout from "../layouts/default.layout";

export default function IndexPage() {
  return <Container path="index" categoryCode="" />;
}
IndexPage.Layout = DefaultLayout;
