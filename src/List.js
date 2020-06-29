import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function List() {
  let [people, updatePeople] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const data = await axios(
        "https://forbes400.herokuapp.com/api/forbes400?limit=100"
      );
      console.log(data);

      updatePeople(data.data);
    };

    // must call this function to access data and to see the console.log(data).
    callApi();
  }, []);

  return (
    <div>
      <h1>List</h1>
      {people.map((person) => (
        <div className="container">
          <div className="image">
            <img
              src={`https://${person.squareImage}  alt=${person.personName}`}
            />
          </div>
          <>
            <h1 key={person.rank}>Rank: {person.rank}</h1>
            <h2 key={person.personName}>Name: {person.personName}</h2>
            <h2 key={person.finalWorth}>
              Net Worth: ({person.finalWorth}/1000) B
            </h2>
            <h2 key={person.countryOfCitizenship}>
              Country: {person.countryOfCitizenship}
            </h2>
            <h2 key={person.source}>Source of wealth: {person.source}</h2>
            <h2 key={person.industries[0]}>Industry: {person.industries[0]}</h2>
            <Link to={`/billionaire-list/${person.personName}`}>
              <button>Read More</button>
            </Link>
          </>
        </div>
      ))}
    </div>
  );
}
