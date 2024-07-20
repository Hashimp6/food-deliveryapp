import { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem'
import './foodDisplay.css'
const FoodDisplay=({catagory})=> {
    const{food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-items">
        {food_list.map((item,index)=>{
            if(catagory==="All" || catagory===item.category){
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
