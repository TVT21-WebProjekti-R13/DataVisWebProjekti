import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserVisuals from "./UserVisuals";
function Home(props) {
    const [value, setValue] = useState([]);
    const [chart, setChart] = useState([]);
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        let valueToString = value.toString()
        if (value.length === 0) {
            console.log("data needed to create a visual");
        } else if (valueToString.split(',')[0] === "scale") {
            localStorage.setItem("scales", "y");
            let myArray = valueToString.split(",");
            myArray.splice(0, 1);
            console.log(myArray)
            props.setTables(myArray);
            navigate("/visuals");
        } else {

            localStorage.setItem("scales", "n");
            props.setTables(value);
            navigate("/visuals");
        }


    }
    useEffect(() => {
        localStorage.setItem("scales", "n");
    }, []);
    function changeTime(e) {
        if (value.includes(e)) {
            var index = value.indexOf(e);
            value.splice(index, 1);
            value.unshift(e);
            console.log(value);
        }
    }
    function appendValue(e) {
        if (value.includes(e)) {
            var index = value.indexOf(e);
            value.splice(index, 1);
            document.getElementById(e + "r").checked = false;
            if (value[0]) {
                document.getElementById(value[0] + "r").checked = true;
            }
        } else {
            value.push(e);
        }
        console.log(value)
    }
    const V6 = ['vostokco2']
    const V5 = ["scale", "vostokco2"]
    const V4 = ["co2annual", "co2monthly", "lawdomede", "lawdomede2", "lawdomedss"]
    const V3 = ["co2annual", "co2monthly"]
    const V2 = ["moberg", "hadcrutnorthernannual", "hadcrutglobalmonthly", "hadcrutglobalannual", "hadcrutnorthernmonthly", "hadcrutsouthernannual", "hadcrutsouthernmonthly"];
    const V1 = ["hadcrutglobalmonthly", "hadcrutglobalannual", "hadcrutnorthernannual", "hadcrutnorthernmonthly", "hadcrutsouthernannual", "hadcrutsouthernmonthly"];
    const viableCharts = ["co2annual", "co2monthly", "lawdomede", "lawdomede2", "lawdomedss", "moberg", "hadcrutnorthernannual", "hadcrutglobalmonthly", "hadcrutglobalannual", "hadcrutnorthernmonthly", "hadcrutsouthernannual", "hadcrutsouthernmonthly"];
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit" value={V1} onClick={(e) => setValue(e.target.value)}>V1</button>
                <button type="submit" value={V2} onClick={(e) => setValue(e.target.value)}>V2</button>
                <button type="submit" value={V3} onClick={(e) => setValue(e.target.value)}>V3</button>
                <button type="submit" value={V4} onClick={(e) => setValue(e.target.value)}>V4</button>
                <button type="submit" value={V5} onClick={(e) => setValue(e.target.value)}>V5</button>
            </form>


            <h1>Create a visual</h1>
            <form onSubmit={handleSubmit}>
                {viableCharts.map(e => <><label for={e}>{e}</label><input type="checkbox" id={e} value={e} onClick={(e) => appendValue(e.target.value)} />
                    Time<input name="same" id={e + "r"} value={e} type="radio" onClick={(e) => changeTime(e.target.value)} /><br></br></>)}
                <button type='submit'>create</button>
            </form>

            <UserVisuals />
        </>

    );
}

export default Home;