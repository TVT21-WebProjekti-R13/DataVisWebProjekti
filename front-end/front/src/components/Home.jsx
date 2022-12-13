import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UserVisuals from "./visuals/UserVisuals";
import { CreateView } from "./views/CreateView";
function Home() {
  return (
    <>
      <h1>Visualisointityökalu</h1>
      <div>
        <Link to="/login">Kirjaudu</Link>
      </div>
      <Link to="/view/temperaturedata">Lämpötilatiedot ja co2 pitoisuudet</Link>
      <div>
        <Link to="/view/emissionsources">Päästölähteet</Link>
      </div>
      <CreateView />
      <UserVisuals />
    </>
  );
}

export default Home;
