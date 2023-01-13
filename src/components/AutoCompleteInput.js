import React from "react";
import { useState } from "react";
import "./style/customConfiguration.css";

export default function AutoCompleteInput(props) {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    props.setValue(query);
    if (query.length > 1) {
      props.fetchSuggestions(query, setSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    props.setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // UP ARROW
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // DOWN ARROW
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // ENTER
    else if (e.keyCode === 13) {
      props.setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <div className="">
        <ul className="suggestions list-group list-group-flush">
          {suggestions.map((suggestion, index) => {
            return (
              <li
                className={
                  index === suggestionIndex
                    ? "list-group-item active"
                    : "list-group-item "
                }
                key={index}
                onClick={handleClick}
              >
                <small>{suggestion}</small>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="autocomplete ">
      <div>
        <input
          type="text"
          className="form-control col-md-6"
          placeholder="From"
          aria-label="From"
          value={props.value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {suggestionsActive && <Suggestions />}
    </div>
  );
}
