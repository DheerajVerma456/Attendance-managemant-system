import UserNavbar from '../components/UserNavbar'
import UserForm1 from '../components/UserForm1'
import UserForm2 from '../components/UserForm2'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
    <div><UserNavbar /></div>
    <div className='userdash'>
      <div className='userf1'>
        <UserForm1 />
      </div>
      <div className='userf2'>
        <UserForm2 />
      </div>
      
    </div>
    <div><button className='nextbutton' onClick={() =>{navigate("/userdashboardnext")}}>Next</button></div>
    </>
  )
}

export default UserDashboard
