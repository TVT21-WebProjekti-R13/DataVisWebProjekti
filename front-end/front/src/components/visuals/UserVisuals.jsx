import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function UserVisuals() {
  const [userVisuals, setUserVisuals] = useState([]);

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
      <h1>Sinun näkymät</h1>
      <table>
        <tbody>
          <tr>
            <th>linkki</th>
            <th></th>
          </tr>

          {userVisuals &&
            userVisuals.map((row) => {
              return (
                <tr key={row.viewID}>
                  <td>
                    <Link to={`/view/${row.viewID}`}>{row.viewID}</Link>
                  </td>
                  <td>
                    <button onClick={() => deleteVisual(row.viewID)}>Poista</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

