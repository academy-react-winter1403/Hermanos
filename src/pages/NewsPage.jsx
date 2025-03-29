import { Outlet } from "react-router-dom";
import NewsCard from "../components/newsPage-components/NewsCard";
import MainCoursesSearch from "../components/coursesPage-components/MainCoursesSearch";
import Pagination from "../components/common/Pagination";

function NewsPage() {
  return (
    <div className="mx-7">
      <Outlet />
      <MainCoursesSearch />
      <div className="newsContainer border flex flex-wrap justify-center rounded-2xl mt-5 mb-5 ">
        <div className="holder p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 drop-shadow-xl mb-3">
          {[...Array(6)].map(() => (
            <NewsCard />
          ))}
        </div>
        <Pagination />
      </div>
      <div className="mb-15">
        <h2 className="text-center text-3xl font-bold mb-[15px] text-[rgba(34,68,93,1)]">
          اخبار و مقالات مشابه
        </h2>
        <p className="text-center text-[rgba(34,68,93,1)] ">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </p>
      </div>
      <div className="newsSliderHolder flex flex-row-wrap grow-3 items-center overflow-hidden border mb-15 ">
        {[...Array(3)].map(() => (
          <NewsCard />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
