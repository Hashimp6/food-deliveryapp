import { useState } from 'react'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Header from '../../Components/Header/header'
import './home.css'
import AppDownload from '../../Components/AppDownload/AppDownload'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
function Home() {
    const [catagory,setCatagory]=useState("All")
  return (
    <div>
        
      <Header />
      <ExploreMenu catagory={catagory} setCatagory={setCatagory} />
      < FoodDisplay catagory={catagory} />
      <AppDownload />
    </div>
  )
}

export default Home
