import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./App.css";

export default function Detail() {
  let [person, updatePerson] = useState([]);

  const params = useParams();
  // console.log(params);

  useEffect(() => {
    const callApi2 = async () => {
      const data2 = await Axios(
        "https://forbes400.herokuapp.com/api/forbes400?limit=100"
      );

      // console.log(data2);
      updatePerson(data2.data);
      console.log(data2.data);
    };
    callApi2();
  }, []);

  return (
    <div>
      {person
        .filter((individual) => individual.personName === params.name)
        .map((data) => (
          <div key={data.personName}>
            <div className="detail-information">
              <div className="detail-container">
                <img
                  key={data.thumbnail}
                  src={`https://${data.person.squareImage}`}
                  alt={data.personName}
                />
              </div>
              <div className="information">
                <h2>Rank: #{data.rank}</h2>
                <h2>Name: {data.personName}</h2>
                <h2>
                  Net Worth:{" "}
                  {`${
                    Math.round(Number(data.finalWorth / 1000) * 100) / 100
                  } B`}
                </h2>
                <h2>Source of Wealth: {data.source}</h2>
                <h2>Industry: {data.industries}</h2>
              </div>
            </div>

            <>
              {/* Check to see if data.state exists within data first */}
              {data.state ? (
                <>
                  <h2>
                    Residence: {data.city}, {data.state},{" "}
                    {data.countryOfCitizenship}
                  </h2>
                </>
              ) : (
                <h2>
                  Residence: {data.city}, {data.countryOfCitizenship}
                </h2>
              )}
            </>

            <>
              {data.abouts ? (
                <>
                  <h2>Additional Information: {data.abouts}</h2>
                </>
              ) : (
                <h2>Additional Information: The data is not available.</h2>
              )}
            </>

            <h2>Interesting Facts: {data.bios} </h2>
          </div>
        ))}
    </div>
  );
}
