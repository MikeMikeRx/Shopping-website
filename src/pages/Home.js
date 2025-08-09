import "./Home.css"
import CatBar from "../components/CatBar"
import Slider from "../components/Slider"
import BotBar from "../components/BotBar"


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