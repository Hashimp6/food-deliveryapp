
import './footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-left'>
                <img src={assets.logo} alt="" />
                <p>Tomazo is one of the best largesr fooos delicert online app .Wide countries wide choicwa wide restourents</p>
                <div className="media">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Dekivery</li>
                    <li>Policy and Privacy</li>
                </ul>
            </div>
            <div className='footer-right'>
                <h2>Get in Touch</h2>
                <ul>
                    <li>+65-6541-565-695</li>
                    <li>sample@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='copy-right'>Copy right Reserved @ 2024</p>
      
    </div>
  )
}

export default Footer
