import React, { useState } from 'react'
import { Accounting, Annotate, Calculator, Coin, Gear, Home, Invoice, Logout, Swapper, Upload, User } from '../../svg'
import './Sidebar.scss'

const sidebarMenuOptions=[
  {
    icon: Home ,
    title:"Home"
  },
  {
    icon: Annotate ,
    title:"Annotate"
  },
  {
    icon: User ,
    title:"Customers"
  },
  {
    icon: Invoice ,
    title:"Invoices"
  },
  {
    icon: Coin ,
    title:"Expenses"
  },
  {
    icon: Calculator ,
    title:"Quotes"
  },
  {
    icon: Swapper ,
    title:"Bank"
  },
  {
    icon: Accounting ,
    title:"Accouting"
  },

]

const MenuItem=(props)=>{
  return(
    <div className={`sidebar_link ${props.status==="inactive"?"":"active"}`}>
                <div className="sidebar_link_indicator"></div>
                  <props.icon/>
                  <p className="sidebar_link-title nunito-normal-sonic-silver-14px">
                   {props.title} 
                  </p>
     </div>
  )


}

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_links_container">
        {
          sidebarMenuOptions.map((option,index)=>{
            return(
              <MenuItem status={`${option.title!=="Home" && "inactive"}`} title={option.title} icon={option.icon} key={index}/>
            )
          })
        }
      </div>

      <div className="sidebar_upload-button">
      <Upload/>
      <p className="sidebar_upload-text nunito-normal-dolphin-18px ">Submit a new document here</p>
      </div>

      <div className="sidebar_utility-links-container">
      <a href="" className="sidebar_utility-link nunito-normal-purple-mountains-majesty-18px"><Logout/> Logout </a>
      <a href="" className="sidebar_utility-link nunito-normal-purple-mountains-majesty-18px"><Gear/> Settings </a>
      </div>
    </div>
  )
}
