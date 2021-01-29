import React from "react";
import "./App.css";
import Result from "./Result";

function Results({ results, openPopup }) {
  console.log(results);
  return (
    <section className="results">
      {results.map((result) => (
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ))}
    </section>
  );
}

export default Results;