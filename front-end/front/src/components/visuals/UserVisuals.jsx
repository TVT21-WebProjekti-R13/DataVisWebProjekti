import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import UserStyles from './UserStyles.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function UserVisuals({ userVisuals, setUserVisuals}) {
  useEffect(() => {
    async function getVisuals() {
      const { data } = await axios.get("/data/getUserVisuals");
      setUserVisuals(data);
    }
    getVisuals();
  }, []);

  async function deleteVisual(viewID) {
    await axios.delete(`/data/deleteVisual/${viewID}`).then(() => {
      setUserVisuals(userVisuals.filter((visual) => visual.viewID !== viewID));
    });
  }

  return (
    <div>
      <h1 class="container" style={{color: 'white', zIndex: 1}}>Sinun näkymät</h1>
      <table class="center">
        <tbody align="center">
          <tr>
            <th style={{color: 'white'}}>Linkki</th>
            <th></th>
          </tr>

          {userVisuals &&
            userVisuals.map((row) => {
              return (
                <tr align="center" key={row.viewID}>
                  <td>
                    <Link style={{ color: 'white'}} to={`/view/${row.viewID}`}>{row.viewID}</Link>
                  </td>
                  <td>
                    <Button onClick={() => deleteVisual(row.viewID)}><DeleteForeverIcon sx={{color: 'red'}}/></Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

