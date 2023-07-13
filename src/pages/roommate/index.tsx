// APP
import { Container } from "../../containers/public/index";
import DefaultLayout from "../../layouts/default.layout";

export default function Roommate() {
  return <Container path="roommate" categoryCode="TNOG" />;
}
Roommate.Layout = DefaultLayout;
