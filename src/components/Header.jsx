import React from "react";
import "./css/Header.css";
import LogoMarvel from "./images/Logo@2x.png";
import LogoSearch from "./images/search@2x.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="menu">
          <figure className="menu-container" id="menu-container">
            <img src={LogoMarvel} alt="" id="logo" />
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Search character"
                id="formSearch"
              />
            </form>
            <img src={LogoSearch} alt="" id="btn_search" />
          </figure>
          <div className="tags-menu">
            <span className="btn-red">
              <p className="titles">Popular</p>
            </span>
            <p className="titles">A-Z</p>
            <p className="titles">Last Viewed</p>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
