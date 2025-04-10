import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
const Pageination = ({ onPageChange, currentpage, blog, pageSize }) => {
  const totalepages = Math.ceil(blog.length / pageSize);
  const renderPaginationLink = () => {
    return Array.from({ length: totalepages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentpage ? "activerPagination" : ""}
          key={pageNumber}
        >
          <Link href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </Link>
        </li>
      )
    );
  };
  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => onPageChange(currentpage - 1)}
          disabled={currentpage === 1}
          className="pageBtn"
        >
          Previous
        </button>
      </li>
      <div>{renderPaginationLink()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentpage + 1)}
          disabled={currentpage === totalepages}
          className="pageBtn"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pageination;
