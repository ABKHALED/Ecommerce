import "./sold.css"
import logo from '../../assets/18028007.jpg'
import { Link } from "react-router-dom"
function Sold() {
  return (
    <div className="sale pt-3 pb-3 pt-md-0 pb-md-0  ">
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 left">
                <img src={logo} alt="sale" />
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0 right">
                <p>Sales up to</p>
                <h1>50% OFF</h1>
                <Link to='shop' >
                    DISCOVER NOW
                </Link>
                <span>Limited Time Offer</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sold
