import React from "react";
import { Link, Route } from "react-router-dom";
import Logo from "./Logo";
import AboutNav from "./AboutNav";
import ListNav from "./ListNav";
import List from "./List";
import About from "./About";
import Footer from "./Footer";
// import ClickButton from "./ClickButton";
import Detail from "./Detail";
import "./App.css";

export default function App() {
  return (
    <>
      <nav className="nav-combined">
        <Logo />

        <Link to="/">
          <AboutNav />
        </Link>

        <Link to="/billionaires-list">
          <ListNav />
        </Link>
      </nav>

      <main>
        <Route path="/" exact>
          <About />
        </Route>

        <Route path="/billionaires-list">
          <List />
        </Route>

        <Route path="/billionaire-list/:name">
          <Detail />
        </Route>

        {/* <Route path="/" exact>
          <ClickButton />
        </Route> */}

        <Footer />
      </main>
    </>
  );
}
