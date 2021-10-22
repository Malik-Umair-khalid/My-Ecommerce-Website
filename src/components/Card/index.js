import Card from "@mui/material/Card";
import "./style.css";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

function MyCard({ title, price, src }) {
  return (
    <div className="myCard">
      <img src={src} alt="" />
      <h4>{title}</h4>
      <ReactStars
        count={5}
        // onChange={ratingChanged}
        size={20}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="black"
        color="#ff523b"
      />
      <p>{price}</p>
    </div>
  );
}

export default MyCard;
