import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { signupFormFields } from "./signupFormFields";
import CustomInput from "../../customInput/CustomInput";
import { useForm } from "../../../hooks/useForm";

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
  return (
    <Container className="p-4 border shadow-lg rounded-4">
      <Form>
        <h2>Create An Account</h2>
        <Row>
          {signupFormFields.map((field, index) => (
            <Col key={index} xs={index === 0 || index === 1 ? 6 : 12}>
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
      </Form>
    </Container>
  );
};

export default SignupForm;
