import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
function Pagination({ setPageNumber, totalPage }) {
  const router = useRouter();
  const handleClickPage = (e: any) => {
    setPageNumber(e.selected + 1);
    router.push({
      pathname: "/",
      search: "?page" + (e.selected + 1),
    });
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
