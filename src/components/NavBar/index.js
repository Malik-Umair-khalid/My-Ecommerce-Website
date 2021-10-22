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
import cart from "../../assets/images/cart.png"

function Navbar() {
  // let location = useLocation();
  // const [darkMode, setdarkMode] = useState("light");
  // const refa = useRef(null);

  // let theme = {
  //   dark: {
  //     color: "#1b1b1b",
  //   },
  //   light: {
  //     color: "rgb(129, 129, 231)",
  //   },
  // };

  return (
      <div className="mynavbar">
        <div className="logo">
          <img src={logo} alt="" width="125px" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
          </ul>
        </nav>
        <img src={cart} alt="" width="30px" />
      </div>
  );
}

export default Navbar;
