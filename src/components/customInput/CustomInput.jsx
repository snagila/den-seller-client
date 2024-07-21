import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, handleOnChange, inputAttributes }) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="fw-bold">{label}</Form.Label>
        <Form.Control
          {...inputAttributes}
          onChange={(e) => handleOnChange(e)}
        />
      </Form.Group>
    </>
  );
};

export default CustomInput;
