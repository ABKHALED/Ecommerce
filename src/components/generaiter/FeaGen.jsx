import React from 'react'
import { NavLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../Provider';
import { useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './fearGen.css'
function FeaGen({data}) {
  const{addTocart ,favorite} = useContext(Context)

  return (
    <>
      {data.map(ele =>{
        return (
            <div key={ele.id} className='prod'>
                <div className="top">
                   <div className="img-holder">
                   <img src={ele.thumbnail} alt="pr" />
                   {/* <img src={ele.images[2]} alt="pr" /> */}
                   </div>
                    <div className="icons">
                        <NavLink to={`/product/${ele.id}`} >
                        <VisibilityIcon /> 
                        </NavLink>
                        <div className={`love ${ele.loved ? 'active' : ''}`} onClick={() => favorite(ele.id)}>
                         {ele.loved ? <FavoriteIcon />  :  <FavoriteBorderIcon />}
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
                </div>
            </div>
        )
      })}
    </>
  )
}

export default FeaGen
