import React from "react";
import { Link } from "react-router-dom";

export default function ClickButton() {
  return (
    <div className="button">
      <Link to="/billionaires-list">
        <button>click</button>
      </Link>
    </div>
  );
}
