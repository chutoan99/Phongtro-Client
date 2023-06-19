export default interface InputPost {
  pageSize: number;
  pageNumber: number;
  orderBy: string;
  direction: string;
  title: string;
  start: string;
  address: string;
  categoryCode: string;
  provinceCode: string;
  areaNumber: [];
  priceNumber: [];
}
