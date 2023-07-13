// APP
import { Container } from "../../containers/public/index";
import DefaultLayout from "../../layouts/default.layout";

export default function RentalApartment() {
  return <Container path="rental-apartment" categoryCode="CTCH" />;
}
RentalApartment.Layout = DefaultLayout;
