import AboutUsForm from "../components/aboutUsPage-components/AboutUsForm";
import SectionTitle from "../components/common/SectionTitle";

function AboutUsPage() {
  return (
    <div className="about-us-holder w-[80%] mx-[auto] mt-[50px] h-[700px] flex flex-row flex-nowrap justify-center">
      <AboutUsForm />
      <div className="us w-[40%] h-[100%] flex flex-col items-end text-[rgba(34,68,93,1)]">
        <div className="contact-us-title w-[90%] h-[150px] mt-[70px] ">
          <SectionTitle
            customClass="text-[rgba(34,68,93,1)] text-end"
            titleClass="mb-[10px]"
            title="با ما در ارتباط باشید"
            description="لورم
          ایپسوم بسیار فراگیر است زیرا بسیار همه کاره است. تعداد پاراگراف‌هایی
          را که می‌خواهید انتخاب کنید، کپی کنید"
          />
        </div>
        <div className="contact-us-title  w-[90%] h-[100px] mt-[30px] flex flex-row flex-nowrap justify-center gap-3 items-center">
          <div className=" w-[75%] h-[70%] text-end flex flex-col indent-[10px]">
            <h3 className=" w-[100%] h-[40px]">آدرس و ساعت کاری</h3>
            <p className=" w-[100%] h-[60px] text-[13px] leading-[25px]">
              ساری ، بلوارخزر، ششصد دستگاه، آموزشگاه بحر دوشنبه – جمعه : 8:00 –
              18:00
            </p>
          </div>
          <div className=" w-[25%] h-[100%] bg-[rgba(251,246,246,1)] rounded-[15px] shadow-[8px_8px_5px_0px_rgba(0,0,0,0.16)]">
            <img
              src="/images/Path 1902.svg"
              className="w-[45%] h-[45%] mx-[auto] mt-[28px]"
              alt=""
            />
          </div>
        </div>
        <div className="contact-us-title  w-[90%] h-[100px] mt-[30px] flex flex-row flex-nowrap justify-center gap-3 items-center">
          <div className=" w-[75%] h-[70%] text-end flex flex-col indent-[10px]">
            <h3 className=" w-[100%] h-[40px]">شماره تماس</h3>
            <p className=" w-[100%] h-[60px] text-[13px] leading-[30px]">
              011-33883358
            </p>
          </div>
          <div className=" w-[25%] h-[100%] bg-[rgba(251,246,246,1)] rounded-[15px] shadow-[8px_8px_5px_0px_rgba(0,0,0,0.16)]">
            <img
              src="/images/Path 1903.svg"
              className="w-[45%] h-[45%] mx-[auto] mt-[28px]"
              alt=""
            />
          </div>
        </div>
        <div className="contact-us-title  w-[90%] h-[100px] mt-[30px] flex flex-row flex-nowrap justify-center gap-3 items-center">
          <div className=" w-[75%] h-[70%] text-end flex flex-col indent-[30px]">
            <h3 className=" w-[100%] h-[40px]">آدرس ایمیل</h3>
            <p className=" w-[100%] h-[60px] text-[13px] leading-[30px]">
              bahr_academy@gmail.com
            </p>
          </div>
          <div className=" w-[25%] h-[100%] bg-[rgba(251,246,246,1)] rounded-[15px] shadow-[8px_8px_5px_0px_rgba(0,0,0,0.16)]">
            <img
              src="/images/Path 1904.svg"
              className="w-[45%] h-[45%] mx-[auto] mt-[28px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
