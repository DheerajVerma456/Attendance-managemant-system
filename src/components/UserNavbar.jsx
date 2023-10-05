import React from 'react'

const UserNavbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <a className="navbar-brand">User Dashboard</a>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-dark" type="logout">LogOut</button>
        </form>
      </div>
    </nav>
  )
}

export default UserNavbar
