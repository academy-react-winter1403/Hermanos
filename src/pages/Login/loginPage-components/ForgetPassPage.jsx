import { Outlet } from "react-router-dom";
import ForgetPasswordForm from "../loginPage-components/ForgetPasswordForm";
import NewPassWordForm from "../loginPage-components/NewPassWordForm";

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
