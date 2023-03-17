import './best.css'
import FeaGen from '../generaiter/FeaGen'
import { Context } from '../../Provider'
import { useState , useContext, useEffect } from 'react'
function Best() {
    const {data} = useContext(Context)
    const [newData , setNewdata] = useState([])
    useEffect(() =>{
        if(data.length > 0){
         setNewdata(data.slice(80,88))
        }
       },[data])
  return (
    <div className='best-sellers pb-5'>
      <div className="container pb-5">
      <div className="spacil-header mb-5">
            <h3>Best Sellers</h3>
            <p>Some of the most selling products</p>
        </div>
        <div className="holder">
            <FeaGen data={newData} />
        </div>
      </div>
    </div>
  )
}

export default Best
