import SignIn from "../components/SignIn"

const AdminSignIn = () => {

  return (
    <div>
      <SignIn title = 'Administrator' onclick={"/administratoruser"}/>
    </div>
  )
}

export default AdminSignIn
