import React, { useEffect, useState } from 'react'
import {Button} from '../../components/Button/Button'
import './Invoices.scss'

const invoicesDetails=[
  {
    bill_number:"20211029-000001",
    client:"TECH LIMITED",
    date:"29 Oct, 2021",
    amount:"2422.50 EUR"
  },
  {
    bill_number:"20211029-000002",
    client:"TECH LIMITED",
    date:"30 Oct, 2021",
    amount:"2000.50 EUR"
  },
  {
    bill_number:"20211029-000003",
    client:"TECH LIMITED",
    date:"30 Oct, 2021",
    amount:"2000.50 EUR"
  },
  {
    bill_number:"20211029-000004",
    client:"TECH LIMITED",
    date:"30 Oct, 2021",
    amount:"2000.50 EUR"
  },
  {
    bill_number:"20211029-000005",
    client:"TECH LIMITED",
    date:"30 Oct, 2021",
    amount:"2000.50 EUR"
  },
  {
    bill_number:"20211029-000006",
    client:"TECH LIMITED",
    date:"30 Oct, 2021",
    amount:"2000.50 EUR"
  },
]

const Chip=(props)=>{
  const [isChipActive, setisChipActive] = useState(false)
  useEffect(() => {
    if(props.type==="active")
    {
      setisChipActive(true)
    }
    else if(props.type==="inactive")
    {
      setisChipActive(false)
    }
  
   
  }, [])
  
  return(
    <div className={`chip_${isChipActive?"active":""}`} onClick={()=>{props.clickFucntion()}}>
      <p className='nunito-normal-white-11px'>{props.title}</p> 
    </div>
  )
}

export const Invoices = () => {

  const chips=[
    {
      title:"To Be Transferred",
      type:"active"
    },
    {
      title:"Transferred",
      type:"inactive"
    },
  ]

  return (
    <div className='invoices'>
      <p className="nunito-normal-dolphin-18px">Invoices</p>
     <div className="chips_container">
       {
         chips.map((chip,index)=>{
        return(
          <Chip type={chip.type} title={chip.title} key={index}/>
         
        )   
        })
       }
     </div>
      <div className="invoices_table">
        <table>
          <thead>
            <tr>
              <th>Bill Number</th>
              <th>Date</th>
              <th>Client</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              invoicesDetails.map((invoice,index)=>{
                return(
                  <tr key={index}>
                    <td>{invoice.bill_number}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.client}</td>
                    <td>{invoice.amount}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <Button type="primary" title="All Invoices"/>
    </div>
  )
}
