import React, { useEffect, useState } from 'react'
import { Dropdown } from '../../components/Dropdown/Dropdown'
import { ADown, Bank, Filter, ThreeDots, TriangleUpDown } from '../../svg'
import './Transfers.scss'

const accountNames=["All accounts","Bansira-Primary-3322 95","Bansira-Main- 4456 56","BNP-4456 56"]

const transfersDetails=[{
  name:"Jhon Doe",
  transcationId:"UD00 O000 0000 0950 000",
  account:"Bansira-Main- 4456 56",
  date:"3 Feb 2022",
  nextTransfer:"3 Mar 2022",
  amount:"10,00"
},
{
  name:"Philleie Fudsa",
  transcationId:"UD00 O000 0000 0950 000",
  account:"BNP- 4456 56",
  date:"7 Feb 2022",
  nextTransfer:"7 Mar 2022",
  amount:"12,00"
},
{
  name:"Lukasu Suda",
  transcationId:"FRO2 0000 0000 0000 0000 8463 57",
  account:"Bansira-Primary-3322 95",
  date:"5 Feb 2022",
  nextTransfer:"5 Mar 2022",
  amount:"34,00"
},
{
  name:"Mulasay Nama",
  transcationId:"08 0000 0000 0000 O000 4567 23",
  account:"Bansira-Primary-3322 95",
  date:"6 Feb 2022",
  nextTransfer:"6 Mar 2022",
  amount:"23,00 "
},
]

const RunningTransfersDetails =[
  {
    name:"Bala Subuu",
    transcationId:"ROD OO00 0000 0000 0000 0987 57",
    nextTransfer:"3 Mar 2022",
    amount:"10,00",
    account:"Bansira-Main- 4456 56"
},
{
  name:"Suzanne Hue",
  account:"BNP-4456 56",
  nextTransfer:"7 Mar 2022",
  amount:"12,00",
  transcationId:"RO5 0000 O000 0000 0000 3526 05"
},
{
  name:"Muyauo Hanuo",
  account:"Bansira-Primary-3322 95",
  nextTransfer:"5 Mar 2022",
  amount:"34,00",
  transcationId:"FRO2 0000 0000 0000 0000 3772 83"
},
{
  name:"Ratanu Guol",
  account:"Bansira-Primary-3322 95",
  nextTransfer:"6 Mar 2022",
  amount:"23,00",
  transcationId:"O U O000 OO0o 0000 0584 29"
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
  
   
  }, [props.type])
  
  return(
    <div className={`chip_${isChipActive?"active":""}`} >
      <p className='nunito-normal-white-11px'>{props.title}</p> 
    </div>
  )
}
  

export const Transfers = () => {

  const [transfersActive, setTransfersActive] = useState("Executed")

  let chips=[
    {
      title:"Executed",
      type:"active"
    },
    {
      title:"Running",
      type:"inactive"
    },
  ]

  const TDetails= transfersActive==="Executed"?transfersDetails:RunningTransfersDetails;

  return (
    <div className='transfers'>
      <div className="transfers_title_container">
        <p className="nunito-normal-dolphin-18px" style={{width:"100%"}}>Transfers</p>
        <Dropdown icon={Bank} options={accountNames}/>
        <Dropdown icon={Filter} options={["24 Hours"]}/>
        <ThreeDots/>
      </div>

      <div className="transfers_chips-container">
      {
         chips.map((chip,index)=>{
        return(
          <div className="transfer_chip-box" key={index} onClick={()=>{setTransfersActive(chip.title); chip.type="inactive"; console.log(chips)}}>
              <Chip type={transfersActive===chip.title?"active":"inactive"} title={chip.title} />
          </div>
          
         
        )   
        })
       }
      </div>

      <div className="transfers_table">
        <table>
        <thead>
            <tr >
              <th><p className='tr_head'>Beneficiary <TriangleUpDown/> </p> </th>
              <th><p className='tr_head'>Account <ADown/>  </p> </th>
              {transfersActive==="Executed" && <th><p className='tr_head'>Date <ADown/>  </p> </th>}
              <th><p className='tr_head'>Next Transfer <ADown/>  </p></th>
              <th><p className='tr_head'>Amount  <TriangleUpDown/>  </p> </th>
            </tr>
          </thead>
          <tbody>
            {
              
              TDetails.map((transfer,index)=>{
                return(
                  <tr key={index}>
                    <td> <div  className='transfers_acc-holdee'> {transfer.name} <p>{transfer.transcationId}</p> </div></td>
                    <td>{transfer.account}</td>
                    {transfersActive==="Executed" && <td>{transfer.date}</td>}
                    <td>{transfer.nextTransfer}</td>
                    <td>{transfer.amount}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
