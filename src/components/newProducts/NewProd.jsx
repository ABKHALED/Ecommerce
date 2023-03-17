import './newprod.css'
import { Context } from '../../Provider'
import { useContext, useState , useEffect } from 'react'
import FeaGen from '../generaiter/FeaGen'
function NewProd() {
    const {data ,addTocart} = useContext(Context)
    const [newdata , setNewdata] = useState([])
    useEffect(() =>{
        if(data.length > 0){
         setNewdata(data.slice(50 ,54))
        }
       },[data])
  return (
    <div className='new-products pt-5 pb-5'>
      <div className="container  pt-5 pb-5">
      <div className="spacil-header mb-5">
            <h3>NEW PRODUCTS</h3>
            <p>Our new products</p>
        </div>
        <div className="row">
            {data.length > 0 && <div className="col-12 col-lg-6 mb-4 mb-lg-0 left">
                <h1>{data[40].title}</h1>
                <div className='image'>
                <img src={data[40].images[0]} alt="" />
                </div>
                <div className="order">
                    <span>${data[40].price}</span>
                <button onClick={() => addTocart(data[40].id)}>{data[40].cart? 'Remove from cart' : 'Add to cart' }</button>
                
                </div>
            </div>}
            <div className='col-12 col-lg-6'>
                <div className="newhold">
                    <FeaGen data={newdata} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewProd
