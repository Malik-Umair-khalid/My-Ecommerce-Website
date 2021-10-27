import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import image1 from "../../assets/images/image1.png";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
import galary1 from "../../assets/images/gallery-1.jpg";
import Footer from "../../components/Footer";
import MyCard from "../../components/Card";
import MyHeading from "../../components/MyHeading";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import "./css/style.css";

function ProductDetails() {
  const [addedToCart, setaddedToCart] = useState(true);
  const [alreadyAdded, setalreadyAdded] = useState(true);
  let store = useSelector((state) => state);
  // const [quantity, setquantity] = useState("1")
  const quantiny = useRef(null);
  const size = useRef(null);
  console.log(store);
  // console.log(alreadyAdded);
  // console.log(store.productId);
  useEffect(() => {
    store.cartItems.map((v) =>
      v.productId == store.productId ? setalreadyAdded(false) : null
    );
  }, []);

  const addtoRedux = useDispatch();
  const addToCart = () => {
    if (size.current.value == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Select Size"
      });
    } else {
      addtoRedux({
        type: "addtoCart",
        name: store.name,
        price: store.price,
        src: store.src,
        productId: store.productId,
        quantiny: quantiny.current.value,
        size: size.current.value,
      });
      setaddedToCart(false);
    }

    console.log();
  };
  return (
    <div>
      <Navbar />
      <div className="smallContainer singleProcduc">
        <div className="myrow">
          <div className="mycol2">
            <img src={store.src} alt="" width="100%" />
          </div>
          <div className="mycol2">
            <p>Home / T Shirt</p>
            <h1>{store.name}</h1>
            <h4>{store.price}</h4>
            <select name="" id="size" ref={size}>
              <option value="">Select Size</option>
              <option value="XXl">XXl</option>
              <option value="Xl">Xl</option>
              <option value="XS">XS</option>
            </select>
            <input
              defaultValue="1"
              type="number"
              id="quantiny"
              ref={quantiny}
            />
            <Button
              title={
                addedToCart ? (alreadyAdded ? "Add To Cart" : "Added") : "Added"
              }
              disabled={addedToCart ? (alreadyAdded ? false : true) : true}
              onClick={() => addToCart()}
            />
            <h3>Product Details</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, ex
              repellat veniam at sequi ratione ullam quaerat? Officiis unde
              doloribus, laborum explicabo ipsam porro cupiditate autem, et
              quasi ad magni.
            </p>
          </div>
        </div>
        <MyHeading title="More Products" />
        <div className="myrow">
          <MyCard title="Red Printed Shirt" price="$500.00" src={product1} />
          <MyCard title="Shoes" price="$600.00" src={product2} />
          <MyCard title="Pamt" price="$700.00" src={product3} />
          <MyCard title="blue Printed Shirt" price="$800.00" src={product4} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
