import { createCategory } from "../../axios/categoryAxios";

export const createCategoryAction = (formObject) => async (dispatch) => {
  const result = await createCategory(formObject);
};
