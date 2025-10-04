import React, { useState } from "react";
import "./List.css";

const List = ({ options }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="list-container">
      <div className="list-scroll">
        <ul className="list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => setSelected(option)}
              className={`list-item ${selected === option ? "selected" : ""}`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      {selected && (
        <p className="selected-text">
          Selected: <span>{selected}</span>
        </p>
      )}
    </div>
  );
};

export default List;
