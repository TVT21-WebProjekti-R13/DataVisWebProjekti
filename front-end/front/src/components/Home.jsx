import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UserVisuals from "./visuals/UserVisuals";
import { CreateView } from "./views/CreateView";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Home() {
  return (
    <>
      <CreateView />
      <UserVisuals />
    </>
  );
}

export default Home;
