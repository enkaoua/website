import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.css'

const Slider = () => {
  return (
    <div className='slider-container'>
        
        <div className='slider-item'>
            <ArrowBackIosIcon />
        </div>
        <div className='slider-item'>
            <ArrowForwardIosIcon />
        </div>

    </div>
  )
}

export default Slider