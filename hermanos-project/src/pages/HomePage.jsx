import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Outlet />
      HomePage
    </div>
  );
}

export default HomePage;
