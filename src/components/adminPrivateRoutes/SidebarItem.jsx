import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  const { icon, label, path, activeItem, setActiveItem } = props;
  return (
    <>
      <Link className="text-decoration-none p-1 me-auto" to={path}>
        <Button
          variant={activeItem === label ? "info" : "outline-info"}
          className="w-100 fw-bold text-dark  text-start"
          onClick={() => setActiveItem(label)}
        >
          {icon} {label}
        </Button>
      </Link>
    </>
  );
};

export default SidebarItem;
