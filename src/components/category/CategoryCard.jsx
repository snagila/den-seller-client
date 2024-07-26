/* eslint-disable react/prop-types */
import { Button, Card, Image, Stack } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import pic from "../../assets/adminAuthImage.svg";

const CategoryCard = () => {
  return (
    <Card className="d-flex flex-row align-items-center rounded shadow">
      <Image src={pic} width={80} height={80} className="p-1" rounded />

      <Card.Body>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-between"
        >
          <Card.Title>title for now</Card.Title>

          <Stack direction="horizontal" gap={2}>
            <Link to={`/admin/edit-category`}>
              <Button variant="outline-success">
                <BsPencil />
              </Button>
            </Link>
            <Button variant="outline-danger">
              <BsTrash />
            </Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
