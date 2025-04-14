import { Outlet } from "react-router-dom";
import ForgetPasswordForm from "../components/loginPage-components/ForgetPasswordForm";
import NewPassWordForm from "../components/loginPage-components/NewPassWordForm";

function ForgetPassPage() {
  return (
    <div>
      <Outlet />
      <ForgetPasswordForm />
      {/* <NewPassWordForm /> */}
    </div>
  );
}

export default ForgetPassPage;
