// LIBRARY
import ReactPaginate from "react-paginate";
function Pagination({ setPageNumber, totalPage }) {
  const handleClickPage = (e: any) => {
    setPageNumber((prev) => ({
      ...prev,
      pageNumber: e.selected + 1,
    }));
  };

  return (
    <div className="d-flex w-100 justify-content-center">
      <ReactPaginate
        previousLabel={"<<"}
        previousClassName={"page-link"}
        pageCount={totalPage}
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
        nextClassName={"page-link"}
        nextLabel={">>"}
      />
    </div>
  );
}

export default Pagination;
