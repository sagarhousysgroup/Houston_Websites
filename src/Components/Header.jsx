import React from "react";

const Header = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div
    //     style={{ backgroundColor: "white", height: "80px" }}
    //     className="container-fluid"
    //   >

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div
        style={{ backgroundColor: "white", height: "80px" }}
        className="container-fluid"
      >
        <a style={{ marginLeft: "160px" }} className="navbar-brand" href="/">
          <img src="Logo 2.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={{ marginLeft: "90px" }}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/about">
                  About
                </a>
                <a className="dropdown-item" href="/contact">
                  Contact
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/about">
                  About
                </a>
                <a className="dropdown-item" href="/contact">
                  Contact
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Oraganization
              </a>
            </li>
            <li style={{ marginLeft: "200px" }} className="nav-item">
              <img src="phone.png" alt="" />
              <button className="btn ">Call us now</button>
            </li>
            <div className="hoverable-image">
              <li
                style={{ marginLeft: "50px", marginTop: "5px" }}
                className="nav-item"
              >
                <img src="search (1).png" alt="" />
                <img
                  style={{ marginLeft: "40px" }}
                  src="shopping-bag.png"
                  alt=""
                />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
