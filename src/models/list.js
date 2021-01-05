import { API } from "@/configs/config";
import { axiosGet } from "@/utils/http";

function getCourseFields() {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: API.getCourseFields,
      success(data) {
        resolve(data.result);
      },
      error(err) {
        reject(err);
      }
    });
  });
}

function getCourses(field) {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: API.getCourses + field,
      success(data) {
        resolve(data.result);
      },
      error(err) {
        reject(err);
      }
    });
  });
}

export { getCourseFields, getCourses };
