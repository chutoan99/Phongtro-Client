// APP
import { Container } from "../../containers/public/index";
import DefaultLayout from "../../layouts/default.layout";

export default function RentalMotel() {
  return <Container path="rental-motel" categoryCode="CTPT" />;
}
RentalMotel.Layout = DefaultLayout;
