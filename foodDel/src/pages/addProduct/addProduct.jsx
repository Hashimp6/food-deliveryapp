// import React from 'react'
import './addProduct.css'
function AddProduct() {
  return (
    <div className='orders'>
      <div className='delivery-details'>
         <h2>Delivery Details</h2>
         <input type="text" placeholder='    Full name'  required/>
         <input type="text" placeholder='    House name' required/>
         <input type="text" placeholder='    street' required/>
         <input type="text" placeholder='    District' required/>
         <input type="phone" placeholder='    Phone no.' required />
         <button>Place Order</button>
      </div>
      
    </div>
  )
}

export default AddProduct
