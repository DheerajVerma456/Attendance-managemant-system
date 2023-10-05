import React from 'react'
import NavBar from '../components/NavBar'
import AdminForm from '../components/AdminForm'

const AdminAdmin = () => {
  return (
    <div>
      <div><NavBar/></div>
      <div className='adminform'><AdminForm/></div>
    </div>
  )
}

export default AdminAdmin
