import React from "react";
import CategoryCard from "../../components/category/CategoryCard";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={9}>
            <Form.Control type="text" placeholder="Search by title..." />
          </Col>

          <Col xs={3}>
            <Link to="/admin/new-category">
              <Button variant="success" className="btn-md w-100">
                Create
              </Button>
            </Link>
          </Col>
        </Row>

        <Stack direction="vertical" gap={2} className="mt-2">
          <CategoryCard />
        </Stack>
      </Container>
    </>
  );
};

export default CategoriesPage;
