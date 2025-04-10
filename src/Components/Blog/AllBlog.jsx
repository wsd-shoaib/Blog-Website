import React, { useEffect, useState } from "react";
import Data from "./Data";
import Pagination from "./Pageination.jsx";
import Category from "./Category.jsx";
import "./Blog.css";
const AllBlog = () => {
  const [blog, setBlog] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const pageSize = 6;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      let url = `Data.json?page=${currentpage}&limit=${pageSize}`;

      if (selectCategory) {
        url += `&category=${selectCategory}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data);
    }
    fetchBlog();
  }, [currentpage, pageSize, selectCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentpage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setSelectCategory(category);
    setCurrentpage(1);
    setActiveCategory(category);
  };

  return (
    <div className="Allblog">
      <div>
        <Category
          onCategory={handleCategoryChange}
          selectCategor={selectCategory}
          activeCategory={activeCategory}
        />
      </div>
      <div>
        <Data
          blog={blog}
          currentpage={currentpage}
          selectCategory={selectCategory}
          pageSize={pageSize}
        />
      </div>
      <div className="pagination">
        <Pagination
          onPageChange={handlePageChange}
          blog={blog}
          currentpage={currentpage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default AllBlog;
