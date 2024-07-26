import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCategoryAction } from "../../../redux/category/categoryActions";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    thumbnail: "",
    title: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // PROCESS TO SEND IMAGE FILE BY PROCESSING FORM
    let formObject = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formObject.append(key, value)
    );

    // call an action
    dispatch(createCategoryAction(formObject));
  };
  return (
    <>
      <Container className="p-4 shadow-lg rounded d-flex justify-content-center">
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Category Thumbnail</Form.Label>
                <Form.Control
                  placeholder="Choose Image"
                  type="file"
                  name="thumbnail"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Category Title</Form.Label>
                <Form.Control
                  placeholder="Choose Image"
                  type="text"
                  name="title"
                  required={true}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default CategoryForm;
