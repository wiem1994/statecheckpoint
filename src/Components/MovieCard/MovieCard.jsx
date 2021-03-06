import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <Card className="movieCard">
            <Card.Img
                variant="top"
                src={movie.posterUrl}
                className="MovieImg"
            />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <h2 style={{ textAlign: "center" }}>
                    {"⭐".repeat(movie.rate)}{" "}
                </h2>
                <Button
                    variant="primary"
                    style={{ display: "flex", margin: "0 auto" }}
                >
                    Download
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default MovieCard;
