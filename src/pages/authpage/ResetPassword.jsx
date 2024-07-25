import React, { useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { resetPassword } from "../../axios/userAxios";
import { toast } from "react-toastify";

const initialFormData = {
  email: "",
};

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialFormData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(formData);
    console.log(result);
    if (result.status === "success") {
      toast.success(result.message);
    }
  };
  return (
    <>
      <Container>
        <Stack
          gap={2}
          className="vh-100 justify-content-center align-items-center"
        >
          {/* <div className="my-4">
            <lord-icon
              src="https://cdn.lordicon.com/twsqddew.json"
              trigger="in"
              delay="100"
              state="in-reveal"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          </div> */}

          <p>Please enter your email to reset your password</p>

          <Form onSubmit={(e) => handleOnSubmit(e)}>
            <Form.Group>
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                placeholder="please enter your user email"
                className="w-100"
                name="email"
                value={formData.email}
                required={true}
                type="email"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button type="submit" className="mt-2">
              Reset Password
            </Button>
          </Form>
        </Stack>
      </Container>
    </>
  );
};

export default ResetPassword;
