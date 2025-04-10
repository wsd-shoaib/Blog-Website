import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import LoginModel from "./LoginModel";

const Navbar = () => {
  const [model, setModel] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const navScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", navScroll);
    return () => {
      window.addEventListener("scroll", navScroll);
    };
  }, []);

  const NavItems = [
    { path: "/", link: "Home" },
    { path: "/blog", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact us" },
  ];

  const OpenModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };

  return (
    <div>
      <header className={`Nav-area ${scroll ? "scrollnav" : ""}`}>
        <nav>
          <Link className="logo">
            Our <span className="logo-blog">Blog</span>
          </Link>
          <ul className={`menu-area ${menu ? "hide-menu" : ""}`}>
            {NavItems.map(({ path, link }) => (
              <li key={path} className="pt-3">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "link "
                  }
                  to={path}
                  onClick={toggleMenu}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="page-link">
            <a href="https://www.facebook.com/abmshoaib" target="blank">
              <MdFacebook />
            </a>
            <a href="https://github.com/wsd-shoaib">
              <FaGithub />
            </a>
            <a href="#">
              <LuTwitter />
            </a>
            <button className="logIn " onClick={OpenModel}>
              Log in
            </button>
          </div>
          {<LoginModel CloseModel={closeModel} Model={model} />}
          <div className="mobail-menu" onClick={toggleMenu}>
            {menu ? <FaBarsStaggered /> : <LiaTimesSolid className="times" />}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
