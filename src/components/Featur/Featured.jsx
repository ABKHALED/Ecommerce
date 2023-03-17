import { useState , useEffect , useContext } from 'react'
import './featured.css'
import { Context } from '../../Provider'
import FeaGen from '../generaiter/FeaGen'
function Featured() {
    const {data} = useContext(Context)
    const [newdata , setNewdata] = useState([])
    useEffect(() =>{
     if(data.length > 0){
      setNewdata(data.slice(23,26))
     }
    },[data])
    
  return (
    <div className='featured  pb-5'>
      <div className="container pb-5">
        <div className="spacil-header mb-5">
            <h3>FEATURED PRODUCT</h3>
            <p>Some products of our choice </p>
        </div>
        <div className='fea-content mt-5'>
            <FeaGen data={newdata} />
        </div>
      </div>
    </div>
  )
}

export default Featured
