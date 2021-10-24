import React, { useEffect } from "react";
import "./css/style.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Context from "../../Context";
import { useRef } from "react";
import { red } from "@mui/material/colors";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import menw from "../../assets/images/menu.png";
import { maxHeight } from "@mui/system";

function Navbar() {
  let location = useLocation();
  const [darkMode, setdarkMode] = useState();
  const refa = useRef(null);
  console.log(refa.current);
  return (
    <Context.Provider value>
      <nav>
        <div className="logo"><img src={logo} width="200px" /></div>
        <input type="checkbox" name="" id="click" />
        <label htmlFor="click">
          <MenuRoundedIcon className="menu-btn" />
        </label>
        <ul>
          <li>
            <Link className={location.pathname == "/" ? "active" : null} to="/">
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              className={location.pathname == "/contact" ? "active" : null}
              to="/contact"
            >
              contact
            </Link>
          </li> */}
          <li>
            <Link
              className={location.pathname == "/products" ? "active" : null}
              to="/products"
            >
              products
            </Link>
          </li>
          {/* <li>
            <Link
              className={location.pathname == "/about" ? "active" : null}
              to="/about"
            >
              About
            </Link>
          </li> */}
          <li>
            <Link
              className={location.pathname == "/productDetails" ? "active" : null}
              to="/productDetails"
            >
              Active product
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname == "/cart" ? "active" : null}
              to="/cart"
            >
            <img src={cart} width="20px" alt="" />
            </Link>
          </li>
          
          {/* <li>
            <div className="form-check form-switch">
              <input
                className="form-check-input mt-1"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                ref={refa}
              />
              <label
                className="form-check-label dark"
                htmlFor="flexSwitchCheckChecked"
              >
                Dark Mode
              </label>
            </div>
          </li> */}
        </ul>
      </nav>
    </Context.Provider>
  );
}

export default Navbar;
