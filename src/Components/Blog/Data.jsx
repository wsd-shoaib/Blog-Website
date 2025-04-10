import React from "react";
import { Link } from "react-router-dom";

const Data = ({ blog, currentpage, selectCategory, pageSize }) => {
  const filterBlog = blog
    .filter((blog) => !selectCategory || blog.category === selectCategory)
    .slice((currentpage - 1) * pageSize, currentpage * pageSize);

  return (
    <div className="blog-card">
      {filterBlog.map((blog) => (
        <Link to={`/blog/${blog.id}`} className="single-blog" key={blog.id}>
          <img src={blog.imgUrl} alt="" className="blog-img " />
          <div className="text-start px-3 my-2 text-dark">
            <p className="blog-name">{blog.name}</p>
            <p>{blog.place}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Data;
