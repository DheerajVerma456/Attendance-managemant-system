import NavBar from "../components/NavBar";
import Form from "../components/Form";

const AdminUser = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="adminuserform">
        <Form />
      </div>
    </div>
  );
};

export default AdminUser;
