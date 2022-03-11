import React, { useState } from "react";

const ResultItem = ({
  item: {
    _source: { emoji, label, tags },
  },
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (value) => {
    let temp = document.createElement("textarea");
    temp.value = value;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="result-item" onClick={() => copyToClipboard(emoji)}>
      {copied && <span className="copied-text">Copied to clipboard!</span>}
      <h4>{label}</h4>
      <span id="emoji-wrapper" role="img" aria-label={label}>
        {emoji}
      </span>
      <div className="tags">
        {tags?.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ResultItem;
