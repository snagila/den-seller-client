import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import CustomInput from "../CustomInput";
import { loginFormFields } from "./loginFormFields";
import { Link } from "react-router-dom";
import { loginUser } from "../../../axios/userAxios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const [spinner, setSpinner] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);

    const result = await loginUser(formData);
    setSpinner(false);

    if (result.status === "error") {
      toast.error(result.message);
      return;
    }

    //  set the accessJWT in session storage and refershJWT in localstorage in browser
    sessionStorage.setItem("accessJWT", result.data.accessJWT);
    localStorage.setItem("refreshJWT", result.data.refreshJWT);

    // once the tokens are stored dispatch an action to get the user
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleOnSubmit}>
          {loginFormFields.map((field, index) => (
            <CustomInput
              key={index}
              label={field.label}
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: field.type,
                name: field.name,
                value: formData[field.name],
                placeholder: field.placeholder,
                required: true,
              }}
            />
          ))}

          <Button
            variant="primary"
            className="btn-lg w-100 mt-2"
            type="submit"
            disabled={spinner}
          >
            {spinner ? (
              <Spinner animation="border" variant="warning" />
            ) : (
              "Login"
            )}
          </Button>
          <p className="pt-2">
            Forgot Password? <Link to="reset-password">Reset Password</Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
