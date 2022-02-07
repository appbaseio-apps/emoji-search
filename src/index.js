import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
  const [results, setResults] = useState(null);
  const [sentimentData, setSentimentData] = useState([]);
  const currentSelectedRandomText = useRef("");

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
        setSentimentData(res.analysis);
      })
      .catch(function (err) {
        console.log("search error: ", err);
      });
  };

  const generateRandomText = () => {
    const randomTextArray = [
      "Home is the best place to rest.",
      "money is awesome but not everything",
      "Slow and steady wins the race.",
      "Loves twitter",
      "omg so bored & my tattoooos are so itchy!!  help! aha =)",
      "just got back from church, and I totally hate insects.",
      "Sports bikes are fun and interesting",
      "Taking Katie to see Night at the Museum.  (she picked it)",
      "Men do cry, but with attitude",
    ];
    let textIndex = Math.floor(Math.random() * 10);
    while (currentSelectedRandomText.current === randomTextArray[textIndex]) {
      textIndex = Math.floor(Math.random() * 10);
    }

    setSearchText(randomTextArray[textIndex]);
    currentSelectedRandomText.current = randomTextArray[textIndex];
  };

  return (
    <div className="app-root">
      <header>
        <div className="logo-wrapper">
          <a href="http://www.appbase.io/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://softr-prod.imgix.net/applications/d919d2ef-4bb1-4b91-aa55-6040ea8667e1/assets/f7a75f17-313d-4759-992f-e7d351a11836.svg"
              alt="appbase-logo"
            />
          </a>
        </div>
        <div className="link-wrapper">
          <a href="http://www.appbase.io/" target="_blank" rel="noreferrer">
            {" "}
            🔗 View Blog
          </a>
        </div>
      </header>
      {isSearching && <div className="loader-overlay">Searching...</div>}
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
        <button id="random-text-btn" onClick={generateRandomText}>
          Generate Random Text
        </button>
      </div>
      <SentimentStats sentimentData={sentimentData} />
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
