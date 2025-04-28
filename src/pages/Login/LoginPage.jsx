import { Outlet } from "react-router-dom";
import ReusableForm from "../Login/loginPage-components/ReusableForm";
// import LoginTwoStep from "../components/loginPage-components/LoginTwoStep";

function LoginPage() {
  return (
    <div>
      <Outlet />
      <ReusableForm />
      {/* <LoginTwoStep /> */}
    </div>
  );
}

export default LoginPage;
