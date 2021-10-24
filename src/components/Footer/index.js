import React from "react";
import whiteLogo from "../../assets/images/logo-white.png";
import playStore from "../../assets/images/play-store.png";
import Appstore from "../../assets/images/app-store.png";
import "./css/style.css" 
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="mycontainer">
          <div className="myrow">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Hello World it is pakistan</p>
              <div className="applogo">
                <img src={playStore} alt="" />
                <img src={Appstore} alt="" />
              </div>
            </div>
            <div className="footer-col-1">
              <img src={whiteLogo} alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores, sit adipisci est dolore nobis quia{" "}
              </p>
            </div>
            <div className="footer-col-3">
              <h3>USE Ful Links</h3>
              <ul>
                <li>coupns</li>
                <li>blig post</li>
                <li>ASD</li>
                <li>XYZ</li>
              </ul>
            </div>
            <div className="footer-col-3">
              <h3>Follow US</h3>
              <ul>
                <li>coupns</li>
                <li>blig post</li>
                <li>ASD</li>
                <li>XYZ</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copy Right Malik Umair khalid</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
