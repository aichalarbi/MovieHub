import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const MovieDetails = ({ initialMovies }) => {
  const { id } = useParams();
  const movie = initialMovies.find((movie) => movie.id.toString() === id);

  
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8}>
          <div>
            <h2 className="text-center">{movie.name}</h2>
            <p className="text-center">{movie.description}</p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                width="560"
                height="315"
                src={movie.trailerLink}
                title={`${movie.name} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-3">
              <Link to="/">
                <Button variant="primary">Back to Home</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
