import { React } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/view/temperaturedata">Lämpötilatiedot ja co2 pitoisuudet</Link>
    </>
  );
}

export default Home;
