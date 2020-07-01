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
    <div className="detail-big-container">
      {person
        .filter((individual) => individual.personName === params.name)
        .map((data) => (
          <>
            <div className="detail-information">
              <div className="detail-container">
                <img
                  className="image-detail"
                  key={data.personName}
                  src={`https://${data.person.squareImage}`}
                  alt={data.personName}
                />
              </div>

              <div className="information">
                <div>
                  <span>Rank:</span> <span>#{data.rank}</span>
                </div>
                <h2>Name: {data.personName}</h2>
                <h2>
                  Net Worth: $
                  {`${Math.round(Number(data.finalWorth / 1000) * 100) / 100}B`}
                </h2>
                <h2>Source of Wealth: {data.source}</h2>
                <h2>Industry: {data.industries}</h2>
              </div>
            </div>

            <div className="all-h2">
              <div className="first-h2">
                <>
                  {/* Check to see if data.state exists within data first */}
                  {data.state ? (
                    <>
                      <div className="residence">
                        <h2>Residence:</h2>
                        <li>
                          {" "}
                          {data.city}, {data.state}, {data.countryOfCitizenship}
                        </li>
                      </div>
                    </>
                  ) : (
                    <div className="no-state-residence">
                      <h2>Residence:</h2>
                      <p>
                        {data.city}, {data.countryOfCitizenship}
                      </p>
                    </div>
                  )}
                </>
              </div>

              <div className="second-h2">
                <>
                  {data.abouts ? (
                    <>
                      <div className="abouts">
                        <h2>Additional Information:</h2>
                        <li>{data.abouts}</li>
                      </div>
                    </>
                  ) : (
                    <div className="no-data">
                      Additional Information: <p>The data is not available.</p>
                    </div>
                  )}
                </>
                <div className="interesting">
                  <h2>Interesting Facts:</h2>{" "}
                  <>
                    <ul>
                      <li>{data.bios}</li>
                    </ul>
                  </>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}
