import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <h1>Welcome to WorldBillionaires!</h1>
      <p>
        Please click the button below to see the full list of 100 billionaires
        in the world!
      </p>

      <div className="button">
        <Link to="/billionaires-list">
          <button>Click</button>
        </Link>
      </div>
    </div>
  );
}
