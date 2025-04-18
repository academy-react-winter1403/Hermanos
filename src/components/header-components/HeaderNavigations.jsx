import MainNavigation from "../common/MainNavigation";

function HeaderNavigations() {
  return (
    <div
      className="nav-container lg:w-[400px] md:w-[300px] h-[80%] md:ml-40 flex flex-nowrap flex-row items-center justify-between
     
    "
    >
      <MainNavigation navigationTo="/about-us">درباره ما</MainNavigation>
      <MainNavigation navigationTo="/news">مقالات</MainNavigation>
      <MainNavigation navigationTo="/courses">دوره ها</MainNavigation>
      <MainNavigation navigationTo="/">صفحه اصلی</MainNavigation>
    </div>
  );
}

export default HeaderNavigations;
