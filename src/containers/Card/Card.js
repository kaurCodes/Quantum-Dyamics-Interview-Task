import React, { useState } from 'react'
import { Eye, Hamburger, X } from '../../svg'
import './Card.scss'

const cardDetails =[
  {
    name:"One",
    number:4536,
    spend:500
  },
  {
    name:"One",
    number:4537,
    spend:2000
  },
]

const CardOverlay=()=>{
  const cashOverlayOption = ["Add Card", "Create Card"]
  return (
    <div className="card_overlay ">
      {
        cashOverlayOption.map((option, index)=>{
          return(
            <p className="card_overlay-option nunito-normal-sonic-silver-14px" key={index}>
            {option}
          </p>
          )
        })
      }
    </div>
  
  )
    
}

export const Card = () => {
  const [overlayOpen, setOverlayOpen] = useState(false)
  return (
    <div className='card'>
      <div className="card_title-container">
        <p className="card_title nunito-normal-dolphin-18px">Cards</p>
       <div className="card_overlay_button" onClick={()=>{setOverlayOpen(!overlayOpen)}}>
      {overlayOpen?<X/> : <Hamburger/>}
       {overlayOpen && <CardOverlay/>}
       </div>
      </div>

{
  cardDetails.map((card,index)=>{
    const limitPercent= card.spend/30
    return(
      <div className="card_details-container" key={index}>
        <div className="card_details">
          <p className="card_detail nunito-normal-dolphin-16px">{card.name} - {card.number} </p>
          <Eye/>
        </div>
        <div className="card_limit-details">
          <div className="card_limit-range">
            <div className="card_limit-spent-percent"  style={{width:`${limitPercent}%`}}>
              <p className="card_limit-spent nunito-normal-sonic-silver-11px">{card.spend}€</p>
            </div>
          </div>
          <div className="card_limit-range-value">
            <p className="card-limit-min nunito-normal-sonic-silver-11px">0 €</p>
            <p className="card-limit-min nunito-normal-sonic-silver-11px">3000 €</p>

          </div>

        </div>
        { index !== cardDetails.length-1 &&
                <div className="card_details-divder">

              </div>}
  </div>
    )
  })
}

    </div>
  )
}
