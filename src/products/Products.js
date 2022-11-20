import React,{useEffect}  from 'react'
import "./Products.css"
import { addtocart } from '../actions'
import { useDispatch,useSelector } from 'react-redux'

const Products = ({id,imagesrc,Product,Price}  ) => {
    const dispatch=useDispatch()
    const Additemincart=()=>{
        dispatch(addtocart({id,imagesrc,Product,Price} ))
    }
  return (
   <div className="product">
    <img src={imagesrc} alt="" />
    <h3>{Product} </h3>
    <p>{Price}TL. </p>
    <button onClick={()=>Additemincart()} >Add to Basket</button>
   </div>
  )
}

export default Products
