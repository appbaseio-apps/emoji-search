import React from "react";

const ResultItem = ({
  item: {
    _source: { emoji, label, tags },
  },
}) => {
  return (
    <div className="result-item">
      <span id="emoji-wrapper" role="img" aria-label={label}>
        {emoji}
      </span>
    </div>
  );
};

export default ResultItem;
