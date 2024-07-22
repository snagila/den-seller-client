import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { signupFormFields } from "./signupFormFields";
import CustomInput from "../../customInput/CustomInput";
import { useForm } from "../../../hooks/useForm";
import { toast } from "react-toastify";
import { createUser } from "../../../axios/userAxios";

const SignupForm = () => {
  const initialFormData = {
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const { formData, setFormData, handleOnChange } = useForm(initialFormData);
  // const { confirmpassword, ...rest } = formData;
  const { firstname, lastname, phone, address, email, password } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      return toast.error("Password and Confirm PassWord do not match");
    }
    const result = await createUser({
      firstname,
      lastname,
      phone,
      address,
      email,
      password,
    });
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
        <Button className="btn-lg w-100 mt-4" type="submit">
          SignUp
        </Button>
      </Form>
    </Container>
  );
};

export default SignupForm;
