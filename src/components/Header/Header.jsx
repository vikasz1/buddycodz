import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { Link } from "react-router-dom";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/AboutUs",
  },

  {
    display: "Courses",
    url: "/courses",
  },

  {
    display: "Blog",
    url: "/blog",
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link className="text-decoration-none" to="/">
              <h1 className=" d-flex align-items-center gap-1">
            BuddyCodz.
            </h1>
            </Link>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <a className="btn-sm btn btn-primary ml-3" href="/#register-class">
                Book free Trial class
              </a>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
