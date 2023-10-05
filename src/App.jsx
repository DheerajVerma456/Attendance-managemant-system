import Front from "./pages/front"
import AdminSignIn from "./pages/AdminSignIn"
import UserLogin from "./pages/UserLogin"
import AdminUser from "./pages/AdminUser"
import AdminAdmin from "./pages/AdminAdmin"
import AdminAttendance from "./pages/AdminAttendance"
import UserDashboard from "./pages/UserDashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboardnext from "./pages/UserDashboardnext"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front/>} />
        <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/admindashboard" element={<AdminSignIn />} />
        <Route path="/administratoruser" element={<AdminUser />} />
        <Route path="/adminadmin" element={<AdminAdmin />} />
        <Route path="/adminattendance" element={<AdminAttendance />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/userdashboardnext" element={<UserDashboardnext />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
