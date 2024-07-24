import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import CustomInput from "../CustomInput";
import { loginFormFields } from "./loginFormFields";
import { Link, useNavigate } from "react-router-dom";
import { getNewAccessJWT, loginUser } from "../../../axios/userAxios";
import { toast } from "react-toastify";
import { getUserAction } from "../../../redux/userRedux/userActions";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(getUserAction());
  };

  // logic to handle what should happen if a user is logged in
  const { user } = useSelector((state) => state.user);

  // AUTO LOGIN
  const autoLogin = async () => {
    const refreshJWT = localStorage.getItem("refreshJWT");

    const result = await getNewAccessJWT(refreshJWT);
    console.log(result);

    if (result?.status === "success") {
      sessionStorage.setItem("accessJWT", result.data);
      dispatch(getUserAction());
    }
  };

  useEffect(() => {
    // if the user exists,navigate to admin homepage
    if (user._id) {
      navigate("/admin");
    }

    // if no tokens, keep them in loginPage
    if (
      !sessionStorage.getItem("accessJWT") &&
      !localStorage.getItem("refreshJWT")
    ) {
      return;
    }

    // if no access token but have refresh token
    if (
      !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("refreshJWT")
    ) {
      autoLogin();
      return;
    }
  }, [user._id, navigate, dispatch]);
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
