import "./Home.css"
import Slider from "../components/Slider"
import CatBar from "../components/CatBar"

const Home = () => {
  return <div className="home-page-container">
    <section className="home-section">
      <CatBar/>    
    </section>

    <section className="home-section">
      <Slider />
    </section>

    <section className="home-section">
      <p>img - text - img </p>
    </section>
  </div>
}

export default Home