import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home(props) {
    const [value, setValue] = useState([]);
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        if (value.length === 0) {
            console.log("data needed to create a visual");
        } else {
            props.setTables(value);
            navigate("/visuals");
        }


    }
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
    const V1 = ["hadcrutglobalmonthly", "hadcrutglobalannual", "hadcrutnorthernannual", "hadcrutnorthernmonthly", "hadcrutsouthernannual", "hadcrutsouthernmonthly"]
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit" value={V1} onClick={(e) => setValue(e.target.value)}>V1</button>
            </form>
            <h1>Create a visual</h1>
            <form onSubmit={handleSubmit}>
                {V1.map(e => <><label for={e}>{e}</label><input type="checkbox" id={e} value={e} onClick={(e) => appendValue(e.target.value)} />
                    Time<input name="same" id={e + "r"} value={e} type="radio" onClick={(e) => changeTime(e.target.value)} /><br></br></>)}
                <button type='submit'>create</button>
            </form>
        </>

    );
}

export default Home;