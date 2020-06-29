import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

export default function Home() {
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
      <h1>hi</h1>
      {people.map((person) => (
        <>
          <h2 key={person.personName}>{person.personName}</h2>
          <div>
            <img src={person.thumbnail} alt={person.personName} />
          </div>
        </>
      ))}
    </div>
  );
}
