import './stars.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
function Stars({rating}) {
  return (
    <div className='rate'>
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
      <span>{rating}</span>
    </div>
  )
}

export default Stars
