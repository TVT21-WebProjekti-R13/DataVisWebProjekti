import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import UserVisuals from "./UserVisuals";
function Home() {
  const [value, setValue] = useState([]);

  const handleSubmit = async (e) => {
    let table = value;
    let result = await axios.post('http://localhost:3001/data/saveData', {
      params:
      {
        data1: table,
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function appendValue(e) {
    if (value.includes(e)) {
      var index = value.indexOf(e);
      value.splice(index, 1);
    } else {
      value.push(e);
    }

  }

  const visuals = ["v1v2", "v3v4", "v5", "v6", "v7"]
  return (
    <>
      <h4>Create a visual</h4>
      <form onSubmit={handleSubmit}>
        {visuals.map(e => <><label for={e}>{e}</label><input type="checkbox" id={e} value={e} onClick={(e) => appendValue(e.target.value)} /><br></br></>)}
        <button type='submit'>create</button>
      </form>
      <Link to="/view/temperaturedata">Lämpötilatiedot ja co2 pitoisuudet</Link>
      <UserVisuals />
    </>
  );
}

export default Home;