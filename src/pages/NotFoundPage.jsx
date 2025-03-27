import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigation = useNavigate();
  const BackToHomePage = () => navigation("/");
  return (
    <div className="notFoundContainer flex justify-center  h-screen w-full bg-white ">
      <div className=" flex flex-wrap justify-center h-[500px] w-[1000px] my-18">
        <span>
          <img src="/images/Mask Group 2.svg" alt="" />
        </span>
        <button
          onClick={BackToHomePage}
          className=" bg-[rgba(21,139,104,1)] h-[50px] text-[rgba(232,242,248,1)] font-bold py-2 px-4 rounded-lg w-[170px] mt-5"
        >
          بازگشت به خانه
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
