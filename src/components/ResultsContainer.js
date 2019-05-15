import React from "react";
import MovieCard from "./MovieCard";
import NoData from "./NoData";

export default function ResultsContainer(props) {
  return (
    <div className="row">
      {props.titles.length !== 0
        ? props.titles.map(title => {
            return (
              <MovieCard
                key={title.id}
                id={title.id}
                img={title.backdrop_path}
                title={title.title ? title.title : title.name}
                category={props.category}
              />
            );
          })
        : <NoData />}
    </div>
  );
}
