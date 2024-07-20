import { assets } from '../../assets/assets'
import './appdownload.css'
function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <hr />
        <p>For Better Experience download the app</p>
        <div className='app-image'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

      
    </div>
  )
}

export default AppDownload
