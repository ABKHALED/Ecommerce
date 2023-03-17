import './location.css'
import { useContext , useState , useEffect } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from 'react-router-dom';
function Location() {
    const [loc , setLoc] = useState(false)
    const [order , setOrder] =useState('')
    const [email , setEmail] = useState('')
    const [err , setErr] = useState(false)
    const navigat = useNavigate()
    function change (e){
        const {value} = e.target
        setOrder(value)
    }
    function changee (e){
        const {value} = e.target
        setEmail(value)
    }
    function click(e){
        e.preventDefault()
        const rg = /\w+@\w+.\w+/ig;
        const t = rg.test(email)
        if(order && t){
            setLoc(true)
            setErr(false)
            setOrder('')
            setEmail('')
        }else{
           setErr(true)
        }
    }
    useEffect(() =>{
        setErr(false)
        setLoc(false)
        setOrder('')
        setEmail('')
    } ,[])
    const date = `${new Date().getDate()+2}/${new Date().getMonth() + 4}/${new Date().getFullYear()}`
  return (
    <div className='location'>
      <div className="container">
        <div className="spacil-header mb-5">
            <h3>PRODUCT LOCATION</h3>
            <p>Here you can find your product location</p>
        </div>
        {!loc ? <div className="loca-holder pt-5">
            <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
           <form >
            <span className='err'>{err?'The order ID or the Email is wrong':''}</span>
           <input onChange={(e) => change(e)} value={order} type="text" placeholder='Order ID' className="form-control mb-3"  />
            <input onChange={(e) => changee(e)} value={email} type="email" placeholder='Your Email' className="form-control mb-3"  />
            <button onClick={(e) => click(e)}>TRACK ORDER</button>
           </form>
        </div> : <div className='loca-tion' >
            <h5>Order ID: <span>{order}</span></h5>
            <div className="info">
              <div>
                <p>Estimated Delivery time:</p>
                <span>{date}</span>
              </div>
              <div>
                <p>Shipping BY:</p>
                <span>BLUEDART</span>
              </div>
              <div>
                <p>Status:</p>
                <span>Picked by the courier</span>
              </div>
              <div>
                <p>Tracking #:</p>
                <span>BD045903594059</span>
              </div>
            </div>
            <div className="proge">
              <div>
                <span className='ic'>
                  <CheckIcon />
                </span>
                <span>Order confirmed</span>
              </div>
              <div>
                <span className='ic'>
                  <PersonIcon />
                </span>
                <span>Picked by courier</span>
              </div>
              <div>
                <span className='ic'>
                  <LocalShippingIcon />
                </span>
                <span>On the way</span>
              </div>
              <div>
                <span className='ic'>
                  <InventoryIcon />
                </span>
                <span>Ready for pickup</span>
              </div>
            </div>
            <button onClick={() => navigat('/shop')}>Back to shop</button>
          </div>}
      </div>
    </div>
  )
}

export default Location
