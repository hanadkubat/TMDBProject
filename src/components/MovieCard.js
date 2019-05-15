import React from "react";
import { Card, CardImg, CardFooter } from "reactstrap";
import noImage from "../assets/noimage.png";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const image = props.img
    ? `http://image.tmdb.org/t/p/w500/${props.img}`
    : noImage;

  return (
    <div className="col-lg-6 mb-3">
      <Link
        to={`detail/${props.category}/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card>
          <CardImg top width="100%" src={image} alt="Card image cap" />
          <CardFooter>{props.title}</CardFooter>
        </Card>
      </Link>
    </div>
  );
}

export default withRouter(MovieCard);
