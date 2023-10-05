import HeaderButtton from "../components/HeaderButtton";
import { admin } from "../assets";
import { user } from "../assets";

const Front = () => {
  return (
    <div>
      <div className="adminButton">
        <HeaderButtton source={admin} text="Admin Login" onclick={"/admindashboard"}/>
      </div>
      <div className="userButton">
        <HeaderButtton source={user} text="User Login" onclick={"/userlogin"}/>
      </div>
    </div>
  );
};

export default Front;
