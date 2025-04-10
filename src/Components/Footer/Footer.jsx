import React from "react";
import { Link } from "react-router-dom";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="Category-footer">
        <p>Category</p>
        <ul>
          <li>
            <Link>News</Link>
          </li>
          <li>
            <Link>World </Link>
          </li>
          <li>
            <Link>Games </Link>
          </li>
          <li>
            <Link> References</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="me-4">Apples</p>
        <ul>
          <li>
            <Link>Web</Link>
          </li>
          <li>
            <Link>eCommerce</Link>
          </li>
          <li>
            <Link>Business</Link>
          </li>
          <li>
            <Link> Entertainments</Link>
          </li>
          <li>
            <Link>Portfolio</Link>
          </li>
        </ul>
      </div>
      <div className="pages-area">
        <p>Pages</p>
        <div className="d-flex gap-2 ">
          <a href="https://www.youtube.com/@wsdshoaib">
            <FaSquareYoutube className="page-icon" />
          </a>
          <a href="https://www.facebook.com/abmshoaib">
            <FaFacebook className="page-icon" />
          </a>
          <a href="https://github.com/wsd-shoaib">
            <FaGithub className="page-icon" />
          </a>
          <a href="#">
            <FaTelegram className="page-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
