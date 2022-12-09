import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserVisuals() {
  const [userVisuals, setUserVisuals] = useState([]);

  useEffect(() => {
    async function getVisuals() {
        const { data } = await axios.get("/data/getUserVisuals");
        setUserVisuals(data);
    }
    getVisuals();
  }, []);

  return (
    <div>
      <h1>omat visualisoinnit</h1>
      <table>
        <tr>
          <th>linkki</th>
        </tr>

        {userVisuals &&
          userVisuals.map((row) => {
            return (
              <tr>
                <td>
                  <Link to={`/visuals/${row.shareID}`}>{row.shareID}</Link>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
