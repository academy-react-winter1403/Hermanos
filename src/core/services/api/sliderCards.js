import http from "../interceptor";

export const getSliderCards = async () => {
  try {
    console.log("loading slider cards...");
    const result = await http.get(`/Home/GetCoursesTop?Count=4`);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
