import React, { useState, useEffect } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Body.css";

function Body() {
  const [copy, setCopy] = useState(false);
  const [quote, setQuote] = useState({ content: "", author: "" });

  function Quote() {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuote(res.data);
    });
  }
  useEffect(() => {
    Quote();
  }, []);
  const tx = `"${quote.content}" - ${quote.author}`;

  return (
    <div>
      <div className="body_cont">
        <div className="content">
          <p>"{quote.content}"</p>
        </div>
        <div className="author">
          <h2>- {quote.author}</h2>
        </div>
        <div className="buttons">
          <CopyToClipboard
            text={tx}
            onCopy={() => {
              setCopy(true);
            }}
          >
            <button>{copy ? "Copied" : "Copy"}</button>
          </CopyToClipboard>
          <button
            onClick={() => {
              Quote();
              setCopy(false);
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
