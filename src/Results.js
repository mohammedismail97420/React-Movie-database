import React from "react";
import "./App.css";
import Result from "./Result";

function Results({ results, openPopup, inputValue }) {
  if (results !== undefined) {
    return (
      <section className="results">
        {results.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
      </section>
    );
  } else {
    return <h1 className="notFound">No results found, please try again.</h1>;
  }
}

export default Results;
