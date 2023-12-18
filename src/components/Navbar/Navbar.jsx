import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarItems = [
    { path: "/home", link: "Home" },
    { path: "/service", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="nav-flex">
          <div className="logo-container">
            <a href="/home">
              Our<span>Blog</span>
            </a>
          </div>
          <ul className="nav-ul">
            {navbarItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div>
            <div className="toggle-menu" onClick={handleMenuToggle}>
              {menuOpen ? (
                <FaX className="menu-icon" />
              ) : (
                <FaBarsStaggered className="menu-icon" />
              )}
            </div>

            <button className="login" type="button">
              login
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-nav">
        <ul className={`nav-ul2  ${menuOpen ? "open-menu" : ""}`}>
          <div>
            {navbarItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </div>
          <div>
            <button className="login login2" type="button">
              login
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
