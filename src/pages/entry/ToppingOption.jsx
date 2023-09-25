import { useState } from "react";
import { useOrderDetails } from "contexts/OrderDetails";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export default function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };
  return (
    <Col xs={12} sm={6} md={4} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      ></img>

      <Form.Group controlId={`${name}-topping-checkbox`} as={Row}>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Check
            type="checkbox"
            onChange={handleChange}
            label={name}
          ></Form.Check>
        </Col>
      </Form.Group>
    </Col>
  );
}
