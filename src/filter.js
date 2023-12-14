import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactStars from "react-stars";

const Filter = ({
  filterTitle,
  filterRating,
  setFilterTitle,
  setFilterRating,
}) => {
  const ratingChanged = (newRating) => {
    setFilterRating(newRating);
  };

  return (
    <Form className="mb-4">
      <Row className="align-items-end">
        <Col>
          <Form.Group controlId="filterTitle">
            <Form.Label>Filter by Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={filterTitle}
              onChange={(e) => setFilterTitle(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="filterRating">
            <Form.Label>Filter by Rating</Form.Label>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
