import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  let [employees, setEmployees] = useState([]);
  let URL = "https://retoolapi.dev/RuqKld/employees";

  const getData = async () => {
    try {
      let response = await axios.get(URL);
      setEmployees(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let data = employees.map((a) => {
    return (
      <div className="card" key={a.name}>
        <h2>Name : {a.name}</h2>
        <h3>Salary:{a.salary}</h3>
        age: {a.level}
      </div>
    );
  });

  return (
    <>
      <div>{data}</div>
    </>
  );
}

export default App;
