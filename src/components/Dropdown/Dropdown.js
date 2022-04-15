import React from 'react'
import { CaretDown } from '../../svg'
import './Dropdown.scss'
export const Dropdown = (props) => {
  return (
    <div className='dropdown'>
        <props.icon/>
        <select name="" id="">
            {
                props.options.map((option,index)=>{
                    return(
                        <option value={option} key={index}>  {option} </option>
                    )
                })
            }
        </select>
    </div>
  )
}
