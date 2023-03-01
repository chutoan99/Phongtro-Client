import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function Pagination({ length, count }) {
  const router = useRouter();
  const { query } = router;
  const TOTAl_PAGE = 100;

  const handleClickPage = (e: any) => {
    console.log(e);
  };
  return (
    <ReactPaginate
      previousLabel={"<<"}
      previousClassName={"page-item page-link"}
      pageCount={TOTAl_PAGE}
      breakLabel={"..."}
      marginPagesDisplayed={3}
      pageRangeDisplayed={6}
      onPageChange={(e) => {
        handleClickPage(e);
      }}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      activeClassName={"active"}
      nextClassName={"page-item page-link"}
      nextLabel={">>"}
    />
  );
}

export default Pagination;
