import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  let [employees, setEmployees] = useState([]);
  let [pics, setPics] = useState([]);
  let URL = "https://retoolapi.dev/c01dit/employees";
  let PicURL = "https://reqres.in/api/users";

  const getData = async () => {
    try {
      let response = await axios.get(URL);
      setEmployees(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getDataPic = async () => {
    try {
      let response = await axios.get(PicURL);
      setPics(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getDataPic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let data = employees.map((a) => {
    let randomNum = Math.floor(Math.random() * 5);
    console.log(randomNum);
    return (
      <div className="card" key={a.id}>
        <h2>Name : {a.name}</h2>
        <h3>Salary:{a.salary}</h3>
        age: {a.level}
        <img src={pics[randomNum].avatar} alt="pic" />;
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
