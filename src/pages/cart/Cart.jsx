import './cart.css'
import { Context } from '../../Provider'
import { useContext , useState , useEffect  } from 'react';
import Ca from '../../components/ca/Ca';
import CheckIcon from '@mui/icons-material/Check';
function Cart() {
    const {data, car ,addTocart ,zero ,ch } = useContext(Context)
    const [to , setTo] = useState(0)
    useEffect(()=>{
      setTo(0)
      car.map((ele) =>{
        return setTo(prev => prev + ele.totle)
      })
    },[data , car])
  return (
   <>{car.length > 0 ? <div className='cartt'>
    <div className="container">
      <h1>Your cart ({car.length} items)</h1>
      <div className="cart-holder">
         
          <div className="body">
              {car.map(ele =>{
                  return <Ca ele={ele} key={ele.id} />
                 
              })}
          </div>
          <div className="foot">
            <div className="foot-holder">
              <div>
                <span>Subtotle:</span>
                <span>${to}</span>
              </div>
              <div>
                <span>Sales Tax:</span>
                <span>$20</span>
              </div>
              <div>
                <span>Grand total:</span>
                <p>${to + 20}</p>
              </div>
              <div>
                <button onClick={() => zero()}>{ch ? <CheckIcon />  : 'Check Out'}</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div> : <div className='no'> <h1>Pleas add an item to your cart... </h1> </div>}
  </> 
  )
}

export default Cart
