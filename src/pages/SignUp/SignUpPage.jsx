import { Outlet } from "react-router-dom";
import RegisterStepOne from "../SignUp//signUpPage-components/RegisterStepOne";
// import RegisterStepTwo from "../components/signUpPage-components/RegisterStepTwo";
// import RegisterStepThree from "../components/signUpPage-components/RegisterStepThree";

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
