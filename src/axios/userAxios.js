import axios from "axios";

// USER API URL
const USER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/user`;

// create user
export const createUser = async (userObj) => {
  try {
    const response = await axios.post(USER_API_URL, userObj);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// verify user
export const verifyUser = async (verifyUserObj) => {
  try {
    const response = await axios.post(
      `${USER_API_URL}/verify-email`,
      verifyUserObj
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
