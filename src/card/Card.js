import React from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, deletefromBasket } from "../actions";
import {v4 as uuidv4} from "uuid"
export default function Card({ id, imagesrc, Product, Price }) {
  const dispatch = useDispatch();
  const deletefromcart=(value)=>{
    dispatch(deletefromBasket(value))
  }
  const addtobasket=()=>{
    dispatch(addtocart({id:uuidv4(),imagesrc,Product,Price}))
  }
  return (
    <div className="cartitem" idofitem={id}>
      <img src={imagesrc} alt="" />
      <div className="productdetails">
        <h3>{Product} </h3>
        <p>{Price}TL. </p>
      </div>
      <div className="cartbuttons">
        <button onClick={()=>addtobasket()} >ADD TO BASKET</button>
        <button onClick={()=>deletefromcart(id)} >DELETE</button>
      </div>
    </div>
  );
}
