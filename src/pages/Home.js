import "./Home.css"
import Slider from "../components/Slider"

const Home = () => {
  return <div className="home-page-container">
    <section className="home-section">
      <p>Category1 + Category2 + Category3 with imgs,links</p>    
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