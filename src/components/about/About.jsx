import "./about.css"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GppGoodIcon from '@mui/icons-material/GppGood';
function About() {
  return (
    <div className="aboutt pt-5 pb-5">
      <div className="container pt-5 pb-5">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-3 cont">
                <div className="cont-holder">
                <div><MonetizationOnIcon /> </div>
                <p>MONEY BACK GURANTEE</p>
                <span>get your money back</span>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 cont">
            <div className="cont-holder">
                <div><LocalShippingIcon /> </div>
                <p>FREE DELIVERY</p>
                <span>Free delivery for evry order</span>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 cont">
            <div className="cont-holder">
                <div><SupportAgentIcon /> </div>
                <p>ALWAY SUPPORT</p>
                <span>We are here for you 24/24</span>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 cont">
            <div className="cont-holder">
                <div><GppGoodIcon/> </div>
                <p>SECURE PAYMENT</p>
                <span>your privacy is our priority</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
