import React, { Component, useEffect }  from 'react';
import "./App.css";
import Header from "./Header/Header";
import Products from "./products/Products"
import Card from "./card/Card"
import { useDispatch,useSelector} from 'react-redux'
import {v4 as uuidv4} from "uuid"
import { useState } from 'react';
function App() {
const [items, setItems] = useState([])
const [cartitems, setCartitems] = useState([])
let selectcart=useSelector(state=>state.cartclick)
let cart=useSelector(state=>state.addtocart)

useEffect(() => {
 
const getdata=async()=>{
  const data=await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json())
  // .then(json=>console.log(json))
  const result=await data.json()
  setItems(result)
}
getdata()
setCartitems(cart)
  
}, [cart,cartitems])


  return (
    <div>
      <Header />
      {
        selectcart ? (cartitems.length>0?cartitems.map(item=>(<Card
           id={item.id} 
           mkey={item.id} 
           imagesrc={item.imagesrc} 
           Product={item.Product}
            Price={item.Price} /> )):<h1 className='emptycart' > NO ANY İTEM İN CART </h1>):
            <div className="products" >
              {items.map(item=>(<Products
               id={uuidv4()} 
                key={item.imagesrc} 
                Product={item.title}
                Price={item.price}
                />))}
            </div>
      }
    
    </div>
  );
}

export default App;
