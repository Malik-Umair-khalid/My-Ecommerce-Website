import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import image1 from "../../assets/images/image1.png";
import Button from "../../components/Button";

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
import Footer from "../../components/Footer";
import MyCard from "../../components/Card";
import MyHeading from "../../components/MyHeading";
import "./css/style.css"

function Products() {
  return (
    <div>
      <Navbar />
      <div className="smallContainer">
        <div className="myrow myrow2">
          <h2>All Products</h2>
          <select name="" id="">
            <option value="">Sort by Bags</option>
            <option value="">Sort by Pants</option>
            <option value="">Sort by Shirts</option>
            <option value="">Sort by shoes</option>
          </select>
        </div>
        <MyHeading title="Featured Products" />
        <div className="myrow">
          <MyCard title="Red Printed Shirt" price="$500.00" src={product1} />
          <MyCard title="Shoes" price="$600.00" src={product2} />
          <MyCard title="Pamt" price="$700.00" src={product3} />
          <MyCard title="blue Printed Shirt" price="$800.00" src={product4} />
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
      <Footer />
    </div>
  );
}

export default Products;
