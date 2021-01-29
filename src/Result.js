import "./Result.css";
import React from "react";

function Result({ result, openPopup }) {
  return (
    <div className="card" onClick={() => openPopup(result.Title)}>
      <img className="img-top-card" src={result.Poster} alt="" />
      <div className="cardText">
        <p className="title">{result.Title}</p>
        <p className="rating">{result.Year}</p>
        <p className="rating">{result.indbID}</p>
      </div>
    </div>
  );
}

export default Result;
