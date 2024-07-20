
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const ContextProvider = (props) => {
    const [cartItem,setcartItem]=useState({})
    const addtoCart=(itemId)=>{
        if(!cartItem[itemId])
            {
                setcartItem(prev=>({...prev,[itemId]:1}))
            }
            else{
                setcartItem(prev=>({...prev,[itemId]:cartItem[itemId]+1}))
            }
    }
    const removeCart=(itemId)=>{
        setcartItem(prev=>({...prev,[itemId]:cartItem[itemId]-1}))
    }

    const total_item=()=>{
      let total=0;
       for(const item in cartItem)
        {
           if(cartItem[item]>0)
            {
              let itemInfo=food_list.find((product)=>product._id===item)
              total+=itemInfo.price*cartItem[item];
            }
        }
        return total
    }
  const contextValue = {
    food_list,
    cartItem,
    addtoCart,
    removeCart,total_item
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
