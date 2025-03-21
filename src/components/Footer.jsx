import React from "react";

function Footer() {
  return (
    <footer className="w-[100%] h-[250px] mt-[50px] bg-[rgba(164,246,222,1)] py-8 text-gray-800 text-center">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className=" h-[150px] flex flex-row-reverse gap-80 text-center md:text-right">
          <div>
            <h3 className="font-bold text-lg mb-3  text-gray-500">خدمات</h3>
            <ul className=" text-gray-500">
              <li>آموزش حرفه‌ای</li>
              <li>مشاوره رایگان</li>
              <li>فرصت‌های شغلی</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3  text-gray-500">آموزشگاه</h3>
            <ul className=" text-gray-500">
              <li>درباره ما</li>
              <li>ارتباط با ما</li>
              <li>قوانین آموزشگاه</li>
            </ul>
          </div>

          <div className="text-end">
            <h3 className="font-bold text-lg mb-3  text-gray-500">
              اخبار آموزشگاه
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              .برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید
            </p>
            <div className="flex flex-row-reverse justify-center my-[50px]">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-[250px] px-4 py-2 border-white bg-white rounded-r-md focus:outline-none text-end"
              />
              <button className="bg-[rgb(69,141,115)] text-white px-4 py-2 rounded-l-md">
                ثبت
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom  */}
        <div className="w-[100%] h-[100px] border-t  border-gray-400 my-6">
          <div className="flex flex-row-nowrap justify-center space-x-4 mb-4"></div>
          <p className="my-[-10px]  text-gray-600 text-end">
            &copy;.کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است
          </p>{" "}
          {/* Social Media Icons */}
          <span className="text-2xl cursor-pointer"></span>
          <span className="text-2xl cursor-pointer"></span>
          <span className="text-2xl cursor-pointer"></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
