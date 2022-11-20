import React, { useEffect } from 'react'
import './Header.css'
import {useSelector,useDispatch} from 'react-redux'
import {cartclick,addtocart} from '../actions'

const Header = () => {

    const cart=useSelector(state=>state.addtocart)
    const dispatch=useDispatch()
    useEffect(() => {
      if(localStorage.getItem("cartitems"!==null)){
        const getitems=JSON.parse(localStorage.getItem("cartitems"))
        getitems.forEach(item=>{
            dispatch(addtocart(item))
        })
      }
    
      
    }, [])
    

  return (
    <div className='header' >
      <div className='search' >
        <input type="text" placeholder='search Product'  />
        <button>Search </button>
      </div>
      <div className='cart' onClick={()=>dispatch(cartclick()) }  >
<span className="bagicon" >🛒</span>
<div className='quantity' >
{cart.length}
</div>
      </div>



    </div>
  )
}

export default Header
