import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'
function ExploreMenu( {catagory,setCatagory}) {
  return (
    <div className='explore-div' id='explore-menu'>
      <h2>Explore Our Menu</h2>
      <p>our diverse menus are here... choose for your taste and preference and enjoy your day with our delecious food</p>
      <div className='explore-lists'>
        {menu_list.map((item,index)=>{
            return(
              <div onClick={() => setCatagory(prev=>prev===item.menu_name?"All":item.menu_name)} className='items-list' key={index}>
              <img className={catagory === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
