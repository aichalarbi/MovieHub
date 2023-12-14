import ReactStars from "react-stars";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
 
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={movie.image}
        alt={movie.name}
        height="100 px"
        width="100 px"
      />
      <Card.Body>
        <Card.Title className="movie-title">{movie.name}</Card.Title>
        <div className="movie-details">
          <div>
            <strong>Description:</strong>
            <p>{movie.description}</p>
          </div>
          <div>
            <strong>Date:</strong>
            <p>{movie.date}</p>
          </div>
          <div>
            <strong>Type:</strong>
            <p>{movie.type}</p>
          </div>
          <div>
        
            <strong>Seasons:</strong>
            <p>{movie.seasons}</p>
          </div>
          <div>
            <strong>Rating:</strong>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              edit={false}
              value={movie.rating}
            />
          </div>
          <Link to ={`/movie/${movie.id}`}>
          <button>Learn more</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
