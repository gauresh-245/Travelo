import React from 'react'
import './Background.css'
import video1 from '../../assets/Newvideo.mp4'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/7.jpg'
import img3 from '../../assets/3.jpg'
const Background = ({playStatus, dataCount}) => {
   
   if(playStatus) {
    return (
        <video className='background fade-in' autoPlay loop muted>
            <source src={video1}  type='video/mp4'/>
        </video>
    )
   }
   else if(dataCount === 0){
    return <img src={image1} className='background fade-in' />
   }
   else if(dataCount === 1){
    return <img src={image2} className='background fade-in' />
   }
   else if(dataCount === 2){
    return <img src={img3} className='background fade-in' />
   }

}

export default Background
