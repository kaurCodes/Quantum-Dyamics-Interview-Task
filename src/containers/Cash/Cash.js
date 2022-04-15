import React, { useState } from 'react'
import { Hamburger, X } from '../../svg'
import './Cash.scss'

const cashDetails=[
  {
    accType:"Main",
    accNumber:"2345 34",
    balance: 139
  },
  {
    accType:"Primary",
    accNumber:"9876 27",
    balance: 264
  },
  {
    accType:"BNP",
    accNumber:"2345 34",
    balance: 139
  },
]

const cashTotal = cashDetails.reduce((x,curValue)=>{
  return x+curValue.balance
},0)

const CashOverlay=()=>{
  const cashOverlayOption = ["Add Account", "Create Account"]
  return (
    <div className="cash_overlay ">
      {
        cashOverlayOption.map((option, index)=>{
          return(
            <p className="cash_overlay-option nunito-normal-sonic-silver-14px" key={index}>
            {option}
            {console.log(option)}
          </p>
          )
        })
      }
    </div>
  
  )
    
}

export const Cash = () => {
const [overlayOpen, setOverlayOpen] = useState(false)
  return (
    <div className='cash'>
      <div className="cash_title-container">
        <p className="cash_title nunito-normal-dolphin-18px">All Cash</p>
       <div className="cash_overlay_button" onClick={()=>{setOverlayOpen(!overlayOpen)}}>
      {overlayOpen?<X/> : <Hamburger/>}
       {overlayOpen && <CashOverlay/>}
       </div>
      </div>
      <p className="cash_total nunito-semi-bold-butterfly-bush-38px">{cashTotal} €</p>
      <div className="cash_breakdown">
        {
          cashDetails.map((acc,index)=>{
            return(
              <div className="cash_overlay-details-container" key={index}>
                <div className="cash_acc-details" key={index}>
                <p className="cash_acc-detail nunito-normal-dolphin-16px" >{acc.accType} - {acc.accNumber} </p>
                <p className="cash_balance nunito-normal-dolphin-16px">{acc.balance} €</p>
              </div>
              { index !== cashDetails.length-1 &&
                <div className="cash_acc-details-divder">

              </div>}
              </div>

            )
          })
        }
      </div>
    </div>
  )
}
