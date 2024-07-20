import { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/storeContext'
import {  useNavigate } from 'react-router-dom'

function Cart() {
  const navigate=useNavigate()
    const{cartItem,food_list,removeCart,total_item}=useContext(StoreContext)
  return (
    <div className='cart'>
        <div className="cartitem">
            <div className="cart-title">
                <p>item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>remove</p>
                </div>
                <br />
                <hr />
                <br />
                {
                  food_list.map((item,index)=>{ 
                    if(cartItem[item._id]>0)
                      {
                          return( 
                            <div className="cart-title" key={index}>
                              
                              <img src={item.image} alt="" />
                              <p>{item.name}</p>
                              <p>{item.price}</p>
                              <p>{cartItem[item._id]}</p>
                              <p>{cartItem[item._id]*item.price}</p>
                              <p className='cross' onClick={()=>{removeCart(item._id)}}>X</p>
                
                            </div>
                           
                          )
                      }
                  })
                }

        </div>
        <hr />
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="total-items"><p>Total Charge</p><p>${total_item()}</p></div>
            <div className="total-items"><p>Delivery charge</p><p>${2}</p></div>
            <div className="total-items"><p>Sub total</p><p>${total_item()+2}</p></div>
            <button onClick={()=>navigate('/orders')}>Proceed to CheckOut</button>
          </div>
        </div>
      <hr />
    </div>
  )
}

export default Cart
