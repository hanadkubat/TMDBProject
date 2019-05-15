import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getShowDetails } from "../actions/detailsActions";

import noImage from "../assets/noimage.png";

class DetailView extends React.Component {
  componentDidMount() {
    const { cat, id } = this.props.match.params;
    this.props.getShowDetails(cat, id);
  }

  render() {
    const {
      name,
      img,
      overview,
      status,
      rating,
      genres,
      video
    } = this.props.details;
    return (
      <div className="container py-3">
        <div className="row my-3">
          <div className="col">
            {!video ? (
              <img
                src={
                  img ? `http://image.tmdb.org/t/p/original/${img}` : noImage
                }
                alt="title cover"
                className="w-100 img-fluid rounded mx-auto shadow-lg"
                style={{ maxHeight: "600px" }}
              />
            ) : (
              <iframe
                title="youtube"
                className="w-100"
                height="550"
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <p className="h1 font-weight-light">{name}</p>
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <p className="lead">{overview}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <p className="h4 font-weight-light">Status: {status}</p>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-lg-6">
            <p className="h4 font-weight-light">Rating: {rating}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <p className="h4 font-weight-light">
              Genres: {genres.map(g => `${g.name} `)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  details: state.details.currentDetails
});
const mapActions = dispatch =>
  bindActionCreators(
    {
      getShowDetails
    },
    dispatch
  );

export default connect(
  mapState,
  mapActions
)(DetailView);
