import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import {
  BsBoxSeam,
  BsCart,
  BsPerson,
  BsPersonCheck,
  BsTag,
  BsTags,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getUserAction } from "../../redux/userRedux/userActions";
import SidebarItem from "./SidebarItem";

const AdminPrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const { firstName, lastName, email } = user;
  const dispatch = useDispatch();

  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleLogout = () => {};

  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            xs={3}
            className="vh-100 bg-info-subtle shadow p-2 position-fixed top-0 left-0"
          >
            <Stack className="h-100 ">
              <Card>
                {/* logo and header part */}
                <Card.Header className="text-center fw-bold">
                  <BsPersonCheck size={100} />
                </Card.Header>
                <Card.Body className="fw-bold">
                  {firstName + " " + lastName}
                </Card.Body>
              </Card>

              {/* Menu Items */}
              <Stack className="my-4">
                <SidebarItem
                  icon={<BsBoxSeam />}
                  label="Dashboard"
                  path="/admin/"
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
                <SidebarItem
                  icon={<BsTag />}
                  label="Category"
                  path="/admin/categories"
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
                <SidebarItem
                  icon={<BsTags />}
                  label="Product"
                  path="/admin/products"
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
                <SidebarItem
                  icon={<BsCart />}
                  label="Order"
                  path="/admin/orders"
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
                <SidebarItem
                  icon={<BsPerson />}
                  label="User"
                  path="/admin/users"
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              </Stack>

              <div className="mt-auto">
                <Button
                  variant="outline-danger"
                  className="w-100"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </Stack>
          </Col>

          {/* this is the multipage content side */}
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPrivateRoutes;
