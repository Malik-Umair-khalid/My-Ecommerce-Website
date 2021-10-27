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
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";

let productsDetail = [
  {
    name: "Shoes",
    price: "$800",
    productImage: product1,
    featured: "Featured",
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product2,
    featured: "Featured",
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product3,
    featured: "Featured",
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product4,
    featured: "Featured",
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product5,
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product6,
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product7,
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product8,
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product9,
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product10,
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product11,
  },
  {
    name: "Shoes",
    price: "$800",
    productImage: product12,
  },
];

function Home() {
  let store = useSelector((state) => state);
  console.log(store);
  console.log(Context);
  const increment = useDispatch();
  let history = useHistory();
  // productsDetail.map((v, i) => console.log(v?.featured));
  const loadSingleProduct = (v, i) => {
    increment({
      type: "increment",
      name: v.name,
      price: v.price,
      src: v.productImage,
      productId: i
    });
    history.push("/productDetails");
    console.log(i)
  };
  return (
    <>
      <div className="myHeader">
        <Navbar />
        <div className="mycontainer">
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
          {productsDetail.map((v, i) =>
            v.featured ? (
              <MyCard
                title={v.name}
                src={v.productImage}
                price={v.price}
                onClick={() => loadSingleProduct(v, i)}
              />
            ) : null
          )}
        </div>
        <MyHeading title="Latest Products" />
        <div className="myrow">
          {productsDetail.map((v, i) =>
            v.featured ? null : (
              <MyCard
                title={v.name}
                src={v.productImage}
                price={v.price}
                onClick={() => loadSingleProduct(v,i)}
              />
            )
          )}
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
              <Button title="Buy Now" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
