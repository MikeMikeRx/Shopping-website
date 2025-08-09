import "./Home.css"
import CatBar from "../components/Home/CatBar"
import Slider from "../components/Home/Slider"
import BotBar from "../components/Home/BotBar"


const Home = () => {
  return <div className="home-page-container">
    <section className="home-section">
      <CatBar/>    
    </section>

    <section className="home-section">
      <Slider />
    </section>

    <section className="home-section">
      <BotBar />
    </section>
  </div>
}

export default Home