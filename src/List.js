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

      // Since data.data.finalWorth is undefined I had to use Number() to convert it to a number in order to do a calculation.
      // console.log(typeof data.data.finalWorth);
      // console.log(typeof Number(data.data.finalWorth));
    };

    // must call this function to access data and to see the console.log(data).
    callApi();
  }, []);

  return (
    <div>
      <h1>List</h1>
      {people.map((person) => (
        <div key={person.personName} className="biggest-container">
          <div key={person.personName}>
            <img
              className="image"
              key={person.thumbnail}
              // make sure to disable adblock to display images
              src={`https://${person.person.squareImage}`}
              // src={person.thumbnail}
              // src={person.squareImage}
              alt={person.personName}
            />
          </div>
          <>
            <h2 key={person.rank}>Rank: {person.rank}</h2>
            <h2 key={person.personName}>Name: {person.personName}</h2>
            <h2 key={person.finalWorth}>
              Net Worth:{" "}
              {`${Math.round(Number(person.finalWorth / 1000) * 100) / 100} B`}
            </h2>
            <h2 key={person.countryOfCitizenship}>
              Country: {person.countryOfCitizenship}
            </h2>
            <h2 key={person.source}>Source of Wealth: {person.source}</h2>
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
