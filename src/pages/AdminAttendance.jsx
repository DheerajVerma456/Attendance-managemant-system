import NavBar from "../components/NavBar";
import Users from "../components/Users";
import AdminUser from "../components/AdminUser";
import AdminAttendanceProject from "../components/AdminAttendanceProject";

const AdminAttendance = () => {
  return (
    <div className="">
      <div>
        <NavBar />
      </div>
      <div>
        <div className="adminattend">
          <div className="usersbuttonadmin">
            <Users title="Users" />
          </div>
          <div className="projectbuttonadmin">
            <Users title="Project" />
          </div>
          <div className="adminusercomp">
            <AdminUser />
          </div>
        </div>
      </div>
      {/* <div>
        <AdminAttendanceProject/>
      </div> */}
    </div>
  );
};

export default AdminAttendance;
