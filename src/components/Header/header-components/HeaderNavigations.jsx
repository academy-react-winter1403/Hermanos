import MainNavigation from "../../common/MainNavigation";

function HeaderNavigations() {
  return (
    <>
      <div className="nav-container hidden w-[190px] lg:w-[400px] md:w-[300px] h-[80%] gap-5 lg:gap-10 sm:gap-2 sm:pl-24 md:pl-55 sm:flex flex-nowrap flex-row items-center justify-between md:justify-center">
        <MainNavigation navigationTo="/about-us">درباره ما</MainNavigation>
        <MainNavigation navigationTo="/news">مقالات</MainNavigation>
        <MainNavigation navigationTo="/courses">دوره ها</MainNavigation>
        <MainNavigation navigationTo="/">صفحه اصلی</MainNavigation>
      </div>
    </>
  );
}

export default HeaderNavigations;
