import http from "../interceptor";

export const getTopCourses = async () => {
  try {
    console.log("Fetching started...");
    const result = await http.get(`/Home/GetCoursesTop?Count=6`);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
