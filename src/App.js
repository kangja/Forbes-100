import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
// import Detail from "./Detail";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">
          <Nav />
        </Link>
      </nav>

      <main>
        <Home />

        {/* <Detail /> */}
      </main>
    </>
  );
}
