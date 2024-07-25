import React, { useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { newPassword } from "../../axios/userAxios";
import { toast } from "react-toastify";

const NewPasswordReset = () => {
  const initialFormData = {
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { password, confirmPassword } = formData;

  const [params] = useSearchParams();
  const userEmail = params.get("e");
  const token = params.get("id");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }
    const result = await newPassword({ formData, token, userEmail });
    result?.status === "success"
      ? toast.success(result.message)
      : toast.error(result.message);
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

          <p className="fw-bold">Please enter your new password</p>

          <Form onSubmit={(e) => handleOnSubmit(e)}>
            <Form.Group>
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                placeholder="please enter your new password"
                className="w-100"
                name="password"
                value={formData.password}
                required={true}
                type="string"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Confirm Password:</Form.Label>
              <Form.Control
                placeholder="please confirm your new password"
                className="w-100"
                name="confirmPassword"
                value={formData.confirmPassword}
                required={true}
                type="string"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button type="submit" className="mt-2">
              Reset Password
            </Button>
          </Form>
          <Link to="/"> Login Now</Link>
        </Stack>
      </Container>
    </>
  );
};

export default NewPasswordReset;
