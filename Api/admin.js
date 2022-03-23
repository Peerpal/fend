// successResponse("successfully Sent");
// errorResponse("Error Occured");
import { SERVER_URL } from '../config/config.js'

export const HandleSubmit = () => {
  let inputs = document.querySelectorAll(".form-control");
  let data = {
    email: inputs[0].value,
    password: inputs[1].value,
  };
  axios.defaults.withCredentials = true;

  axios
    .post(`${SERVER_URL}/user/login`, data, {
    // .post("https://sddlogistics.herokuapp.com/user/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      withCredentials: true,
    })
    .then((res) => {
            if(res.status == 200){
                successResponse(` ${res.data.message}`)
               window.location.replace("/admin/admindash.html")
            }
             if(res.status == 206){
                errorResponse(`Error: ${res.data.message}`)
            }
    })
    .catch((err) => {
        errorResponse(`Error: ${err.message}`)
    });

  return false;
};
