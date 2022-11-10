import React from 'react'
import { Navbar } from './Navbar'
import { Table } from './Table'

export const Dashboard = () => {
  return (
    <div className='w-full h-full bg-zinc-800'>
        <Navbar />
        <Table />
    </div>
  )
}
