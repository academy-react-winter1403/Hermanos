import { Outlet } from "react-router-dom";
import ReusableForm from "../components/loginPage-components/ReusableForm";

function LoginPage() {
  return (
    <div>
      <Outlet />
      <ReusableForm />
    </div>
  );
}

export default LoginPage;
