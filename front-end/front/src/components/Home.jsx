import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UserVisuals from "./visuals/UserVisuals";
import { CreateView } from "./views/CreateView";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Home() {
  const [userVisuals, setUserVisuals] = useState([]);

  return (
    <>
      <CreateView userVisuals={userVisuals} setUserVisuals={setUserVisuals}/>
      <UserVisuals userVisuals={userVisuals} setUserVisuals={setUserVisuals}/>
    </>
  );
}

export default Home;
