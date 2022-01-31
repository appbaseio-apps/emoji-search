import React from "react";
import ResultItem from "../ResultItem.js";

const ResultsRenderer = ({ results = [] }) => {
  const getResultItems = () => {
    if (!results || !Array.isArray(results) || !results.length) {
      return (
        <span id="no-results" role="img" aria-label={"no results"}>
          🤕 Nothing relevant found!!! Try something else.
        </span>
      );
    }
    return results.map((resultItem) => {
      return <ResultItem key={resultItem._id} item={resultItem} />;
    });
  };

  return <div className="results-renderer">{getResultItems()}</div>;
};

export default ResultsRenderer;
