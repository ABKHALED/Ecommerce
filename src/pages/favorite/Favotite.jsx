import './favotite.css'
import { Context } from '../../Provider'
import { useContext , useState , useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
function Favotite() {
    const {favedta ,favorite ,addTocart} = useContext(Context)
    
  return (
    <div className='favorite'>
        <div className="container">
        <div className="spacil-header mb-5">
            <h3>Favorites</h3>
            <p>Products you liked</p>
        </div>
            {favedta.length > 0 ? <div className='pro-holder'>
                {favedta.map(ele =>{
                    return <div key={ele.id} className='fav-product' >
                        <div className="top">
                            <img src={ele.thumbnail} alt={ele.id} />
                            <div className="icons">
                        <NavLink to={`/product/${ele.id}`} >
                        <VisibilityIcon /> 
                        </NavLink>
                        <div className='' onClick={() => favorite(ele.id)}>
                         <DeleteIcon />
                        </div>
                        <div className={`cart ${ele.cart ? 'active' : ''}`} onClick={() => addTocart(ele.id)}>
                         {ele.cart ? <ShoppingCartIcon />  :<ShoppingCartOutlinedIcon />}
                        </div>
                    </div>
                        </div>
                        <div className="bottom">
                            <p>{ele.title}</p>
                            <div className="price">
                                <h4>${ele.price - Math.floor(ele.price * (ele.discountPercentage /100))} </h4>
                                <span>${ele.price}</span>
                            </div>
                            <p className="time">{ele.lovedate}</p>
                        </div>
                    </div>
                })}
            </div> : <div className='empty'><h1>You don't have a favorite product...</h1></div>}
        </div>
    </div>
  )
}

export default Favotite
