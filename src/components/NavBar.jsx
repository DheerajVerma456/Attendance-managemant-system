import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#e3f2fd' }} >
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Administrator</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Edit</a></li>
                <li><a className="dropdown-item" href="#">Add</a></li>
                <li><a className="dropdown-item" href="#">Delete</a></li>
            </ul>
            </li>
            <li className="nav-item dropdown ">
            <a className="text-dark nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Link to = "/adminadmin">Admin</Link>
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Add</a></li>
                <li><a className="dropdown-item" href="#">Edit</a></li>
                <li><a className="dropdown-item" href="#">Delete</a></li>
                <li><a className="dropdown-item" href="#">View</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link" ><Link to="/adminattendance">Attendance</Link></a>
            </li>
        </ul>
         <button className="btn btn-light" type="logout">Logout</button>
        </div>
    </div>
    </nav>
    </div>
  )
}

export default NavBar
