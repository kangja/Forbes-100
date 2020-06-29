import React from "react";
import { Link, Route } from "react-router-dom";
import AboutNav from "./AboutNav";
import BillionairesListNav from "./BillionairesListNav";
import List from "./List";
import About from "./About";
// import Detail from "./Detail";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">
          <AboutNav />
        </Link>

        <Link to="/billionaires-list">
          <BillionairesListNav />
        </Link>
      </nav>

      <main>
        <Route path="/" exact>
          <About />
        </Route>

        <Route path="/billionaires-list">
          <List />
        </Route>
      </main>
    </>
  );
}
