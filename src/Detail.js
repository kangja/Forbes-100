import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function Detail() {
  let [person, updatePerson] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const callApi2 = async () => {
      const data2 = await Axios(
        "https://forbes400.herokuapp.com/api/forbes400?limit=100"
      );

      console.log(data2);
      updatePerson(data2.data);
    };
    callApi2();
  }, []);

  return (
    <div>
      {person
        .filter((individual) => individual.personName === params.name)
        .map((data) => (
          <div>
            <h1>{data.personName}</h1>
          </div>
        ))}
    </div>
  );
}
