import React from 'react'
import axios from 'axios'
import Styles from "./ViewStyles.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';

export const CreateView = ({ userVisuals, setUserVisuals }) => {
  const visuals = ["v1v2", "v3v4", "v5", "v6", "v7", "v8"]

  const handleSubmit = async(e) => {
    e.preventDefault()
    const selectedVisuals = []
    visuals.forEach((visual) => {
      if (document.getElementById(visual).checked) {
        selectedVisuals.push(visual)
      }
    })
    console.log(selectedVisuals);
    axios.post('/data/saveData', { selectedVisuals }).then((res) => {
      setUserVisuals([...userVisuals, res.data])
    });
  }

  return (
    <div>
      <h1 class="container" style={{color: 'white', fontSize: '55px'}}>Luo visualisointi</h1>
      <form class="form-center" onSubmit={handleSubmit}>
        {visuals.map((visual) => {
          return (
            <div class="cbposition" key={visual} >
              <Checkbox style={{color: "orange"}} id={visual} name={visual} />
              <label style={{color: "white"}} htmlFor={visual}>{visual}</label>
            </div>
          )
        })}
        <Button variant="contained" sx={{backgroundColor: 'orange', color: 'black'}} type="submit">Luo</Button>
      </form>
    </div>
  )
}
