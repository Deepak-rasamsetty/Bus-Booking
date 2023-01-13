import React from 'react'

export default function SuggesstionsDropdown(props) {
  return (
    <ul className="suggestions">
      {props.suggestions.map((suggestion, index) => {
        return (
          <li
            className={index === props.suggestionIndex ? "active" : ""}
            key={index}
            onClick={props.handleClick}
          >
            {suggestion}
          </li>
        );
      })}
    </ul>
  )
}
