import React from "react";
import { Alert } from "react-bootstrap";
import CategoryForm from "../../components/category/categoryForm/CategoryForm";

const NewCategoryPage = () => {
  return (
    <>
      <Alert variant="info" className="text-dark fw-bold fs-4">
        Add New Category
      </Alert>

      <CategoryForm />
    </>
  );
};

export default NewCategoryPage;
