import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import Results from "./Results";
import Popup from "./Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=cf2e4532";

  const search = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiUrl + "&t=" + id).then(({ data }) => {
      let result = data;
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <a
        className="tag"
        href="https://github.com/mohammedismail97420/React-Movie-database"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <h1 className="heading center">Movie Database</h1>
      <Search handleInput={handleInput} search={search} />
      <Results results={state.results} openPopup={openPopup} />
      {typeof state.selected.Title != "undefined" ? (
        <Popup selected={state.selected} closePopup={closePopup} />
      ) : (
        false
      )}
    </div>
  );
}

export default App;
