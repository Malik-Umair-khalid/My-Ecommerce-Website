import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import image1 from "../../assets/images/image1.png";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";

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
import buy1 from "../../assets/images/buy-1.jpg";
import exc from "../../assets/images/exclusive.png";
import galary1 from "../../assets/images/gallery-1.jpg";
import Footer from "../../components/Footer";
import MyCard from "../../components/Card";
import MyHeading from "../../components/MyHeading";
import "./css/style.css";

function Cart() {
  let store = useSelector((state) => state);
  const [quantity, setquantity] = useState();
  // console.log(store.cartItems);
  // console.log(typeof quantity);
  // console.log( JSON.parse(localStorage.getItem("persist:root")))
  const [price, setprice] = useState()
  const [totalPrice, settotalPrice] = useState()
  console.log(totalPrice)
  console.log(price)
  useEffect(() => {
    {store.cartItems.map((v, i) => (
      
      setprice(v.quantiny * +v.price.slice(1)),
      settotalPrice(price + +v.quantiny * +v.price.slice(1))
    ))}
  }, [])


  return (
    <div>
      <Navbar />
      <div className="smallContainer cartPage">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>SubToal</th>
          </tr>
          {store.cartItems.map((v, i) => (

            <tr key={i}>
              <td>
                <div className="cartInfo">
                  <img src={v.src} alt="" />
                  <div>
                    <p>{v.name}</p>
                    <small>{v.price}</small>
                    <br />
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input
                  defaultValue={v.quantiny}
                  onChange={(v) => v.target.value }
                  type="number"
                  id="quantity"
                  disabled
                />
              </td>
              <td>
                { v.quantiny * +v.price.slice(1) } 
          {/* {setprice( v.quantiny * +v.price.slice(1))} */}
     
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>
              <div className="cartInfo">
                <img src={buy1} alt="" />
                <div>
                  <p>Red Printed Shat</p>
                  <small>$5000</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" />
            </td>
            <td>Price</td>
          </tr>
          <tr>
            <td>
              <div className="cartInfo">
                <img src={buy1} alt="" />
                <div>
                  <p>Red Printed Shat</p>
                  <small>$5000</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" />
            </td>
            <td>Price</td>
          </tr>
          <tr>
            <td>
              <div className="cartInfo">
                <img src={buy1} alt="" />
                <div>
                  <p>Red Printed Shat</p>
                  <small>$5000</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" />
            </td>
            <td>Price</td>
          </tr>
          <tr>
            <td>
              <div className="cartInfo">
                <img src={buy1} alt="" />
                <div>
                  <p>Red Printed Shat</p>
                  <small>$5000</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" />
            </td>
            <td>Price</td>
          </tr> */}
        </table>

        <div className="totalPrice">
          <table>
            <tr>
              <td>SubTotal</td>
              <td>${totalPrice}</td>
            </tr>
            <tr>
              <td>TAX</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${totalPrice}</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
