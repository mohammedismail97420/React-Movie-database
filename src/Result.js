import "./Result.css";
import React from "react";
import Zoom from "react-reveal/Zoom";

function Result({ result, openPopup }) {
  return (
    <Zoom>
      <div
        className="card"
        title="Open"
        onClick={() => openPopup(result.Title)}
      >
        <img
          className="img-top-card"
          src={result.Poster}
          alt={"No image found for " + result.Title}
        />

        <div className="cardText">
          <p className="title">{result.Title}</p>
          <p className="rating">{result.Year}</p>
        </div>
      </div>
    </Zoom>
  );
}

export default Result;
