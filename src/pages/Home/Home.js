import React from 'react'
import { Header } from '../../components/Header/Header'
import { Dashboard } from '../../containers'
import './Home.scss'
export const Home = () => {
  return (
    <div>
        <Header/>
        <Dashboard/>
    </div>
  )
}
