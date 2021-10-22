import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../components/NavBar";
import { useContext } from "react";
import Context from "../../Context";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store";
import "./style.css";
import image1 from "../../assets/images/image1.png";
import Button from "../../components/Button";
import Navbar from "../../components/NavBar";
import catagory1 from "../../assets/images/category-1.jpg";
import catagory2 from "../../assets/images/category-2.jpg";
import catagory3 from "../../assets/images/category-3.jpg";
import product1 from "../../assets/images/product-1.jpg";
import product2 from "../../assets/images/product-2.jpg";
import product3 from "../../assets/images/product-3.jpg";
import product4 from "../../assets/images/product-4.jpg";
import product5 from "../../assets/images/product-5.jpg";
import product6 from "../../assets/images/product-6.jpg";
import product7 from "../../assets/images/product-7.jpg";
import product8 from "../../assets/images/product-8.jpg";
import product9 from "../../assets/images/product-9.jpg";
import product10 from "../../assets/images/product-10.jpg";
import product11 from "../../assets/images/product-11.jpg";
import product12 from "../../assets/images/product-12.jpg";
import exc from "../../assets/images/exclusive.png";

import MyCard from "../../components/Card";
import MyHeading from "../../components/MyHeading";
function Home() {
  let store = useSelector((state) => state);
  console.log(store);
  console.log(Context);
  const increment = useDispatch();
  // let theme = useContext(Context)
  // console.log(theme)
  return (
    <>
      <div className="myHeader">
        <div className="mycontainer">
          <Navbar />
          <div className="mycontainer">
            <div className="myrow">
              <div className="mycol2">
                <h1>
                  Give Your Workout <br /> a New style
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, <br /> corrupti aliquam quisquam distinctio a
                  excepturi neque laudantium{" "}
                </p>
                <Button title="Explore" />
              </div>
              <div className="mycol2">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---Feayured Catagories */}

      <div className="catagories">
        <div className="smallContainer">
          <div className="myrow">
            <div className="mycol3">
              <img src={catagory1} alt="" />
            </div>
            <div className="mycol3">
              <img src={catagory2} alt="" />
            </div>
            <div className="mycol3">
              <img src={catagory3} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ---Feayured Catagories */}

      <div className="smallContainer">
        <MyHeading title="Featured Products" />
        <div className="myrow">
          <MyCard title="Red Printed Shirt" price="$500.00" src={product1} />
          <MyCard title="Shoes" price="$600.00" src={product2} />
          <MyCard title="Pamt" price="$700.00" src={product3} />
          <MyCard title="blue Printed Shirt" price="$800.00" src={product4} />
        </div>
        <MyHeading title="Latest Products" />
        <div className="myrow">
          <MyCard title="Red Printed Shirt" price="$500.00" src={product5} />
          <MyCard title="Shoes" price="$600.00" src={product6} />
          <MyCard title="Pamt" price="$700.00" src={product7} />
          <MyCard title="blue Printed Shirt" price="$800.00" src={product8} />
          <MyCard title="Red Printed Shirt" price="$500.00" src={product9} />
          <MyCard title="Shoes" price="$600.00" src={product10} />
          <MyCard title="Pamt" price="$700.00" src={product11} />
          <MyCard title="blue Printed Shirt" price="$800.00" src={product12} />
        </div>
      </div>
      <div className="offer">
        <div className="smallContainer">
          <div className="myrow">
            <div className="mycol2">
              <img src={exc} alt="" />
            </div>
            <div className="mycol2">
              <p>Hello Pakistan</p>
              <h1>Ghari</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                ipsam tempore at eos. Molestias laboriosam{" "}
              </p>
              <Button title="Buy Now"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
