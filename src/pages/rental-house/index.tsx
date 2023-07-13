// APP
import { Container } from "../../containers/public/index";
import DefaultLayout from "../../layouts/default.layout";

export default function RentalHouse() {
  return <Container path="rental-house" categoryCode="NCT" />;
}
RentalHouse.Layout = DefaultLayout;
