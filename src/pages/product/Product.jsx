import './product.css'
import { useParams } from 'react-router-dom'
import { useContext , useState , useEffect } from 'react'
import { Context } from '../../Provider'
import Stars from '../../components/Stars/Stars'
function Product() {
    const {id} = useParams()
    const {data ,addTocart ,favorite} = useContext(Context)
    const [product,setProduct] = useState(null)
    const [index , setIndex] = useState(0)
    useEffect(() =>{
        if(data.length > 0){
            
            setProduct(data.find(ele =>{
                return ele.id === +id
            }))   
   }
  } , [data])
  return (
    <>
    {product &&
    <div className='product'>
        <div className="container ">
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="row">
                        <div className="col-2">
                            
                            { product.images.map((ele , i) =>{
                                return <div className={`min-img ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} key={i}>
                                    <img src={ele} alt={i} />
                                </div>
                            })}
                        </div>
                        <div className="col-10 larg-img">
                            <img src={product.images[index]} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 contect">
                    <div className="head">
                    <p className='two'>{product.category}</p>
                    <h1>{product.title}</h1>
                    <p className='one'>{product.brand}</p>
                    <p className='stock' >In stock : {product.stock} P</p>
                    <Stars rating={product.rating} />
                    <div className='pricing'>
                        <span className="new-price">Price : ${product.price - Math.floor(product.price * (product.discountPercentage /100))}</span>
                        <span className="old-price">${product.price}</span>
                    </div>
                    </div>
                    <p className='disc mt-5'>{product.description}</p>
                    <div className="foot">
                        <button onClick={() =>addTocart(product.id)}>{!product.cart ? 'Add to cart' : 'Remove from cart'}</button>
                        <button onClick={() => favorite(product.id)}>{!product.loved ? 'Add to favorite' : 'Remove from favorite'}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     }
    </>
  )
}

export default Product
