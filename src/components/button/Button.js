import React from "react";
import "./Button.scss";

export default function Button({ text, id }) {
  return (
    <button className="button" id={id}>
      {text}
    </button>
  );
}
