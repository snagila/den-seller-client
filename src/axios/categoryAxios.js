import axios from "axios";

// CATEGORY API URL
const CATEGORY_API_URL = `${
  import.meta.env.VITE_APP_API_BASE_URL
}/api/category`;

// PUBLIC ROUTES

// create a category
export const createCategory = async (formObject) => {
  try {
    const response = await axios.post(CATEGORY_API_URL, formObject, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
