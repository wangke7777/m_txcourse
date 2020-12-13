import Axios from "axios";

function axiosGet (options) {
  Axios(options.url)
    .then(res => {
      options.success(res.data);
    })
    .catch(err => {
      options.error(err);
    });
}

export { axiosGet };
