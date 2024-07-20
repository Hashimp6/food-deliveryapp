import  { useContext } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'
function FoodItem({id,name,description,price,image}) {

    const{ cartItem,addtoCart,removeCart}=useContext(StoreContext)

  return (
    <div className='food-items'>
        <div className='food-items-container'>
            <img src={image} alt="" className="itemsimage" />
            {!cartItem[id]? <img className='add-button' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt="" />
           : <div className='count-changer'>
             <img className='decriment' onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt="" />
             <p className='count'>{cartItem[id]}</p>
             <img className='incriment' onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
            </div>}
        </div>
        <div className="other-details">
            <div className="rating">
            <p className="item-name">{name}</p>
            <img src={assets.rating_starts} alt="" className="rating-img" />
            </div>
            <p className='description'>{description}</p>
            <p className="price">$ {price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
