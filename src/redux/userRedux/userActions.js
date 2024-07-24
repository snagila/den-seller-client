import { toast } from "react-toastify";
import { getNewAccessJWT, getUser } from "../../axios/userAxios";
import { setUser } from "./userSlice";

// GET THE USER
export const getUserAction = () => async (dispatch) => {
  const result = await getUser();
  if (result.status === "error") {
    toast.error(result.message);
    return;
  }

  dispatch(setUser(result.data));
};

// // AUTO LOGIN
// export const autoLoginAction = () => async (dispatch) => {
//   const refreshJWT = localStorage.getItem("refreshJWT");

//   const result = await getNewAccessJWT(refreshJWT);
//   //   console.log(result);

//   if (result?.status === "success") {
//     console.log(result.data);
//     sessionStorage.setItem("accessJWT", result.data);

//     dispatch(getUserAction());
//   }
// };
