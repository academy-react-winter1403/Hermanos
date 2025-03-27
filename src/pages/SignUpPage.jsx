import { Outlet } from "react-router-dom";
import RegisterStepOne from "../components/loginPage-components/RegisterStepOne";
import RegisterStepTwo from "../components/loginPage-components/RegisterStepTwo";
import RegisterStepThree from "../components/loginPage-components/RegisterStepThree";

function SignUpPage() {
  return (
    <div>
      <Outlet />
      <RegisterStepOne />
      {/* <RegisterStepTwo />
      <RegisterStepThree /> */}
    </div>
  );
}

export default SignUpPage;
