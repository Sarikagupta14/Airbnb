import React from 'react'
import './style.css'
import Xm1 from './images/Star 1.png'
const Card = (props) => {
  let badgeText
  if(props.openSlot === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
 
    <div className='card'>
     
    {badgeText &&  <div className='card-badge'>{badgeText}</div>}
    
    <img src={props.image} alt="" className='card--image'/>

    <div className='card--stats'>
      <img src={Xm1} alt="" className='card--star' />
      <span>{props.rating}</span>
      <span className='gray'>({props.reviewCount}). </span>
      <span className='gray'>{props.location}</span>
      <p>{props.title}</p>
      <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
      {/* <p>{props.openSlot}</p> */}
    </div>

    
     

     
      </div>

     
     
  )
}

export default Card
