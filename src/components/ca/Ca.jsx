import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Context } from '../../Provider'
import { useContext , useState , useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
function Ca({ele}) {
    const { addTocart ,setdata } = useContext(Context)
    const [count , setCount] = useState(ele.amount)
    function dec(){
        if(count <= 1){
            setCount(1)
            addTocart(ele.id)
        }else{
            setCount(prev => prev -1)
        }
    }
    function inc(){
        setCount(prev => prev  + 1)
    }
    useEffect(() =>{
        const t =  ele.price - Math.floor(ele.price * (ele.discountPercentage /100)) 
        setdata(prev =>{
            return prev.map(el =>{
                return el.id === ele.id ? {...el , amount: count  , totle : t * count } : el
            })
        })
    } , [count])
  return ( 
  <div className='item' >
                       <div className="start">
                       <div className="left">
                        <div className="left-left">
                                <img src={ele.thumbnail} alt={ele.id} />
                            </div>
                            <div className="left-right">
                                <p>{ele.title}</p>
                                <span>{ele.brand}</span>
                               
                            </div>
                        </div>
                       </div>
                       
                        <div className="pri">
                            <span className="h">Price:</span>
                        <div className="price">
                            <span className="new">${ele.price - Math.floor(ele.price * (ele.discountPercentage /100))}</span>
                            <span className='old'>${ele.price}</span>
                        </div>
                        </div>
                       
                        <div className='q'>
                        <span className="h">Quantity:</span>
                           <div className="qu">
                           <ArrowCircleDownIcon onClick={dec} />
                            <span>{ele.amount}</span>
                            <ArrowCircleUpIcon onClick={inc} />
                           </div>
                        </div>
                        <div className="totel">
                        <span className="h">Total:</span>
                           <div className="tot">
                           <p>${ele.totle}</p>
                           </div>
                        </div>
                          <div className='ic'>
                          <DeleteForeverIcon onClick={() =>   addTocart(ele.id)} className='de' />
                           <Link className='see' to={`/product/${ele.id}`}>
                            <VisibilityIcon />
                           </Link>
                          </div>

    </div>
  )
  
}

export default Ca
