import React from "react";

function Popup({ selected, closePopup }) {
  return (
    <section onClick={closePopup} className="popup">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="content"
      >
        <div>
          <div className="row">
            <div className="col">
              <div className="plot">
                <img src={selected.Poster} alt={selected.Title} />
              </div>
            </div>
            <div className="col">
              <h2>
                {selected.Title} <span>({selected.Year})</span>
              </h2>
              <p className="rating">
                <span>Rating: </span>
                {selected.imdbRating}
              </p>
              <p className="rating">
                <span>Release Date: </span>
                {selected.Released}
              </p>
              <p className="rating">
                <span>Runtime: </span>
                {selected.Runtime}
              </p>
              <p className="rating">
                <span>Genre: </span>
                {selected.Genre}
              </p>
              <p className="rating">
                <span>Director: </span>
                {selected.Director}
              </p>
              <p className="rating">
                <span>Actors: </span>
                {selected.Actors}
              </p>
              <p className="rating">
                <span>Language: </span>
                {selected.Language}
              </p>
              <p className="rating">
                <span>Box Office: </span>
                {selected.BoxOffice}
              </p>
            </div>
          </div>
        </div>

        <p>{selected.Plot}</p>

        <button className="close" onClick={closePopup}>
          ×
        </button>
      </div>
    </section>
  );
}

export default Popup;
