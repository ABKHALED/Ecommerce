import "./home.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/about/About";
import Featured from "../../components/Featur/Featured";
import Sold from "../../components/sold/Sold";
import NewProd from "../../components/newProducts/NewProd";
import Best from "../../components/best/Best";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Sold />
      <NewProd />
      <Best />
    </>
  )
}

export default Home
