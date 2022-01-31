import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useDebounce } from "./utils";

import appbasejs from "appbase-js";
import ResultsRenderer from "./components/ResultRenderer";
import SentimentStats from "./components/SentimentStats";
var appbaseRef = appbasejs({
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "emoji-dataset",
  credentials: "f1da7b624918:3331c67d-3477-4b24-aa89-aefc6ca4683e",
});

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);

  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchText, 500);

  // Effect for API call
  useEffect(
    () => {
      // if (debouncedSearchTerm) {
      setIsSearching(true);
      const SEARCH_ID = "emoji_search";
      appbaseRef
        .reactiveSearch(
          [
            {
              id: SEARCH_ID,
              dataField: [
                { field: "tags.keyword", weight: 3 },
                { field: "tags.search", weight: 2 },
                { field: "label", weight: 1 },
              ],
              size: 10,
              ...(debouncedSearchTerm && { value: debouncedSearchTerm }),
            },
          ],
          {
            userId: "jon@appbase.io",
          }
        )
        .then(function (res) {
          setIsSearching(false);
          setResults(res[SEARCH_ID].hits.hits);
        })
        .catch(function (err) {
          console.log("search error: ", err);
        });
      // } else {
      //   setResults([]);
      //   setIsSearching(false);
      // }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

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
      </div>
      <SentimentStats />
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
