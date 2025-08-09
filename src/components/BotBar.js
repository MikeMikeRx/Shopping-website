import "./BotBar.css"
import { Link } from "react-router-dom"
import img1 from "../images/main-page/bot1.jpg"
import img2 from "../images/main-page/prew10.jpeg"
import img3 from "../images/main-page/prew7.1.jpg"
import img4 from "../images/main-page/bot6.jpg"
import img5 from "../images/main-page/bot5.png"
import img6 from "../images/main-page/bot7.jpg"

const BotBar = () => {
  return (
    <section className="bottom-bar">
        <div className="sec-1">
            <Link className="img-1">
                <img src={img4} alt="" />
            </Link>
            <p>Our sellers guarantee top quality and trusted brands. Enjoy great prices, exclusive deals, and reliable service. Shop confidently with us!</p>
            <Link className="img-2">
                <img src={img2} alt="" />
            </Link>
        </div>

        <div className="sec-2">
            <h3>Online shopping has never been easier.</h3>
            <p>Enjoy hassle-free online shopping with our easy-to-use platform. Secure payments, fast checkout, and quick delivery make your experience smooth and convenient every time.</p>
            <Link>
                <img src={img6} alt="" />
            </Link>
        </div>

        <div className="sec-3">
            <Link>
                <img src={img3} alt="" />
            </Link>
            <h3>Shopp online from comfort of your home.</h3>
        </div>
         
    </section>
    
  )
}

export default BotBar