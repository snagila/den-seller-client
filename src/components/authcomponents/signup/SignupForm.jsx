import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { signupFormFields } from "./signupFormFields";
import { useForm } from "../../../hooks/useForm";
import { toast } from "react-toastify";
import { createUser } from "../../../axios/userAxios";
import CustomInput from "../CustomInput";

const SignupForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [spinner, setSpinner] = useState(false);
  const { formData, setFormData, handleOnChange } = useForm(initialFormData);
  // const { confirmpassword, ...rest } = formData;

  const {
    firstName,
    lastName,
    phone,
    address,
    email,
    password,
    confirmPassword,
  } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);
    if (password !== confirmPassword) {
      return toast.error("Password and Confirm PassWord do not match");
    }
    const result = await createUser({
      firstName,
      lastName,
      phone,
      address,
      email,
      password,
    });
    setSpinner(false);

    if (result?.status === "error") {
      toast.error(result.message);
    }
    if (result?.status === "success") {
      setFormData(initialFormData);
      return toast.success(`User Created: ${result.message}`);
    }
  };

  return (
    <Container className="p-4 border shadow-lg rounded-4">
      <Form onSubmit={handleOnSubmit}>
        <h2>Create An Account</h2>
        <Row>
          {signupFormFields.map((field, index) => (
            <Col
              key={index}
              xs={index === 0 || index === 1 ? 6 : 12}
              className="mt-2"
            >
              <CustomInput
                label={field.label}
                handleOnChange={handleOnChange}
                inputAttributes={{
                  name: field.name,
                  type: field.type,
                  placeholder: field.placeholder,
                  value: formData[field.name],
                  required: true,
                }}
              />
            </Col>
          ))}
        </Row>
        <Button className="btn-lg w-100 mt-4" type="submit" disabled={spinner}>
          {spinner ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            "Sign Up"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
