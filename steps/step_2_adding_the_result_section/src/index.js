import React, { useState } from "react";
import ReactDOM from "react-dom";
import ResultsRenderer from "./components/ResultRenderer";
import "./index.css";
// import the appbase-js lib
import appbasejs from "appbase-js";
// instantiating appbase-js required
// fields to connect to the dataset
var appbaseRef = appbasejs({
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "emoji-dataset",
  credentials: "f1da7b624918:3331c67d-3477-4b24-aa89-aefc6ca4683e",
});

const App = () => {
  const [searchText, setSearchText] = useState("");
  // indicates whether api has responded or not
  const [isSearching, setIsSearching] = useState(false);
  // keeping record of the fetched results
  const [results, setResults] = useState(null);
  const makeApiCall = () => {
    setIsSearching(true);
    const SEARCH_ID = "emoji_search";
    appbaseRef
      .reactiveSearch(
        [
          {
            id: SEARCH_ID,
            size: 10,
            ...(searchText && { value: searchText }),
          },
        ],
        {
          enableQueryRules: true,
        }
      )
      .then(function (res) {
        setIsSearching(false);
        setResults(res[SEARCH_ID].hits.hits);
      })
      .catch(function (err) {
        console.log("search error: ", err);
      });
  };

  return (
    <div className="app-root">
      <div className="input-wrapper">
        <input
          name="search-field"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Try searching, 'man swimming' "
        />
        <button id="recommend-btn" onClick={makeApiCall}>
          Recommend
        </button>
      </div>
      <div className="result-wrapper">
        <ResultsRenderer results={results} />
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
