import React from "react";

function Footer() {
  return (
    <footer className=" flex flex-nowrap w-[100%] xl:h-[320px] bg-[rgba(164,246,222,1)] py-4 sm:py-[20px] text-gray-800 text-center">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className=" xl:h-[150px] flex flex-row-reverse gap-3 sm:gap-7 md:gap-10 lg:gap-50 xl:gap-80 text-right">
          <div className="block sm:flex sm:flex-row-reverse sm:gap-7 md:gap-10 lg:gap-50 xl:gap-80 ">
            <div className="mb-3">
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-3  text-gray-500">
                خدمات
              </h3>
              <ul className="text-xs sm:text-sm lg:text-base text-gray-500">
                <li>آموزش حرفه‌ای</li>
                <li>مشاوره رایگان</li>
                <li>فرصت‌های شغلی</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-3  text-gray-500">
                آموزشگاه
              </h3>
              <ul className="text-xs sm:text-sm lg:text-base text-gray-500">
                <li>درباره ما</li>
                <li>ارتباط با ما</li>
                <li>قوانین آموزشگاه</li>
              </ul>
            </div>
          </div>

          <div className=" mx-auto text-end">
            <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-3  text-gray-500">
              اخبار آموزشگاه
            </h3>
            <p className="text-xs sm:text-sm  text-gray-500 mb-3">
              .برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید
            </p>
            <div className="flex flex-row-reverse justify-center my-[20px] sm:my-[50px]">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="sm:w-[250px] w-[150px] h-[25px] sm:h-[35px] px-4 py-2 border-white bg-white rounded-r-md focus:outline-none text-end text-xs sm:text-sm lg:text-base"
              />
              <button className="bg-[rgb(69,141,115)] h-[25px] sm:h-[35px] text-white px-4 py-auto rounded-l-md text-sm lg:text-base">
                ثبت
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom  */}
        <div className="w-[100%] h-[100px] border-t  border-gray-400 m-7 ">
          <div className="flex flex-nowrap flex-row-reverse  justify-between space-x-4 mb-4">
            <p className="mt-4 text-xs sm:text-sm md:text-base  text-gray-600 text-end">
              &copy;.کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است
            </p>
            {/* Social Media Icons */}
            <div className="flex flex-nowrap mt-3 gap-2">
              <span className=" cursor-pointer">
                <img
                  src="/public/images/social network icon (10).svg"
                  alt=""
                  className="w-[30px] h-[25px] "
                />
              </span>
              <span className=" cursor-pointer">
                <img
                  src="/public/images/social network icon (6).svg"
                  alt=""
                  className="w-[30px] h-[25px] "
                />
              </span>
              <span className="cursor-pointer">
                <img
                  src="/public/images/social network icon (7).svg"
                  alt=""
                  className="w-[30px] h-[25px] "
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
