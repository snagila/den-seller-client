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

// LOGIN USER
export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${USER_API_URL}/login`, formData);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// GET USER
export const getUser = async () => {
  try {
    const response = await axios.get(USER_API_URL, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// AUTO LOGIN
export const getNewAccessJWT = async (refreshJWT) => {
  try {
    const response = await axios.post(
      `${USER_API_URL}/accessJWT`,
      {},
      {
        headers: { Authorization: refreshJWT },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
