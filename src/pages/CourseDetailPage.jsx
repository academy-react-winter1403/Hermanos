import Button from "../components/common/Button";
import CourseReusableTeacher from "../components/common/CourseReusableTeacher";
import SectionTitle from "../components/common/SectionTitle";
import CourseDetailDesc from "../components/courseDetail-components/CourseDetailDesc";
import CourseDetailSugesstion from "../components/courseDetail-components/CourseDetailSugesstion";
import CourseDetailVideo from "../components/courseDetail-components/CourseDetailVideo";
import FirstCourseInfo from "../components/courseDetail-components/FirstCourseInfo";
import CoursesSlider from "../components/coursesPage-components/CoursesSlider";

function CourseDetailPage() {
  return (
    <>
      <div className="course-details w-[100%] flex flex-row flex-nowrap gap-[20px] mt-[100px] justify-center mb-[80px]">
        <div className="detail-left w-[450px] rounded-[30px] bg-[rgba(251,246,246,1)] p-[30px]">
          <div className="course-info1 p-[20px] w-[100%] bg-[rgba(255,255,255,1)] rounded-[26px] mb-[25px]">
            <FirstCourseInfo asking="مدرس دوره" answering="نام استاد" />
            <FirstCourseInfo
              asking="هزینه تمام دوره"
              answering="تومان  3,000,000 "
              color="#E11818"
            />
            <FirstCourseInfo asking="تکنولوژی دوره" answering="نام تکنولوژی" />
            <FirstCourseInfo asking="سطح دوره" answering="پیشرفته" />
            <FirstCourseInfo asking="ظرفیت دوره" answering="50 نفر" />
            <FirstCourseInfo asking="وضعیت دوره" answering="شروع ثبت نام" />
          </div>
          <div className="course-info2 p-[20px] w-[100%] bg-[rgba(255,255,255,1)] rounded-[26px] mb-[25px]">
            <FirstCourseInfo asking="مدت زمان" answering="3 ساعت و 55 دقیقه" />
            <FirstCourseInfo asking="تعداد ویدیوها" answering="12 ویدیو" />
            <FirstCourseInfo asking="تعداد نظرات" answering="27 نظر" />
            <FirstCourseInfo asking="امتیاز دوره" answering="4.5" />
          </div>
          <div className="course-info3 p-[20px] w-[100%] bg-[rgba(255,255,255,1)] rounded-[26px] mb-[25px]">
            <FirstCourseInfo asking="تاریخ بروزرسانی" answering="1402/07/06" />
            <FirstCourseInfo asking="شروع دوره" answering="1402/07/06" />
            <FirstCourseInfo asking="پایان دوره" answering="1402/07/06" />
          </div>
          <Button style="bg-[rgba(91,225,185,1)] h-[40px] w-[50%] leading-[36px] mb-[60px] mx-[auto] text-[13px] rounded-[13px]">
            رزرو دوره
          </Button>
          <div className="about-teacher p-[20px] w-[100%] bg-[rgba(255,255,255,1)] rounded-[26px] mb-[25px]">
            <SectionTitle title="درباره استاد" fontSize="13px" />
            <div className="teacher-name-pic w-[80%] h-[40px] mt-[20px] mb-[15px] mx-[auto] flex justify-center">
              <CourseReusableTeacher lineHeight="33px" gap="16px" />
            </div>
            <div className="text-end mx-[auto] text-[13px] ">
              لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
              توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
            </div>
          </div>
        </div>
        <div className="detail-right w-[1100px] rounded-[30px] bg-[rgba(251,246,246,1)] p-[30px]">
          <div className="course-detail-pic w-[1000px] h-[550px] rounded-[30px] mb-[20px]">
            <img src="/images/03.svg" className="w-[100%] h-[100%]" alt="" />
          </div>
          <CourseDetailDesc />
          <CourseDetailVideo />
          <CourseDetailSugesstion />
        </div>
      </div>
      <SectionTitle
        title="دوره های مشابه"
        description="ساختن دنیایی بهتر، یک دوره در یک زمان"
        titleClass="text-[26px] mb-[10px]"
      />
      <div className="mt-[80px]">
        <CoursesSlider />
      </div>
    </>
  );
}

export default CourseDetailPage;
