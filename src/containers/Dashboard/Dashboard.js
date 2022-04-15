import React from 'react'
import { Card } from '../Card/Card'
import { Cash } from '../Cash/Cash'
import { Sidebar } from '../Sidebar/Sidebar'
import { Transfers } from '../Transfers/Transfers'
import {Invoices} from '../Invoices/Invoices'
import './Dashboard.scss'


export const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard_col-1">
            <Sidebar />
        </div>
        <div className="dashboard_col-2">
          <Cash/>
          <Card/>
        </div>
        <div className="dashboard_col-3">
          <Transfers/>
          <Invoices/>
        </div>
    </div>
  )
}
