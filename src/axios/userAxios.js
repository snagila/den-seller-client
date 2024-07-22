import axios from "axios";

// USER API URL
const USER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/user`;

export const createUser = async (userObj) => {
  try {
    const response = await axios.post(USER_API_URL, userObj);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
