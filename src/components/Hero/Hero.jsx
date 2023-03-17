import './Hero.css'
import { NavLink } from 'react-router-dom'
function Hero() {
  return (
    <div className='hero'>
      <div className="container">
       <div className="contant">
       <h1>One-stop <span>Online Shopping</span></h1>
        <h1 className='ls'>For All Your Neddes</h1>
        <NavLink to='shop'>
            See All Products
        </NavLink>
       </div>
      </div>
    </div>
  )
}

export default Hero
