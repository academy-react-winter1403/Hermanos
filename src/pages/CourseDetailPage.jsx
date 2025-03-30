import SectionTitle from "../components/common/SectionTitle";

function CourseDetailPage() {
  return (
    <>
      <div className="course-details border w-[100%] flex flex-row flex-nowrap gap-[20px] mt-[100px] justify-center">
        <div className="detail-left w-[25%] h-[500px] rounded-[30px] bg-[rgba(251,246,246,1)] p-[30px]"></div>
        <div className="detail-right w-[75%] rounded-[30px] bg-[rgba(251,246,246,1)] p-[30px]">
          <div className="course-detail-pic border w-[100%] h-[400px] rounded-[30px]">
            <img
              src="/images/03.svg"
              className="w-[100%] block h-[100%]"
              alt=""
            />
          </div>
          <div className="course-detail-desc"></div>
        </div>
      </div>
    </>
  );
}

export default CourseDetailPage;
