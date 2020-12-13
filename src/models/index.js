import { API } from "@/configs/config";
import { axiosGet } from "@/utils/http";

function getCourseDatas () {
  console.log("getCourseDatas");
  return new Promise((resolve, reject) => {
    axiosGet({
      url: API.getCourseDatas,
      success (data) {
        resolve(data.result);
      },
      error (err) {
        reject(err);
      }
    });
  });
}

export { getCourseDatas };
