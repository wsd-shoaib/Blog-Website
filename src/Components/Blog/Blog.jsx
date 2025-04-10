import AllBlog from "./AllBlog";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="Banner">
        <h1>Blog Page</h1>
      </div>
      <div>
        <AllBlog />
      </div>
    </div>
  );
};

export default Blog;
