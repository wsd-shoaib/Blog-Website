import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="Banner-area text-white">
      <div className="text-center heading ">
        <h1>Welcome To Our Blog</h1>
        <p>
          Start your blog today and join a community of writers and readers who
          <br />
          are passionate about sharing their stories and ideas.
        </p>
        <div>
          <Link className="learn-more">
            Learn more <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
