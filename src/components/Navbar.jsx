// importing css
import "./Navbar.css";

import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiMenuFill } from "react-icons/ri";

// available nav links
const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Contact",
    url: "/Contact",
  },

  {
    display: "Recruitment",
    url: "/Recruitment",
  },
  {
    display: "Team",
    url: "/Team",
  },
];

const gettotop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <div className="navigation ">
        <div className="logo">
          <Link to="/">
            {" "}
            <img height={60} width={60} src={logo} alt="logo" />
          </Link>
        </div>

        <div className="nav">
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li key={index} className="nav__item">
                  <Link to={item.url} onClick={gettotop}>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="heading__menu">
            <span>
              <RiMenuFill
                className="ri-menu-line"
                onClick={menuToggle}
              ></RiMenuFill>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
