import { React, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function Home(props) {
    const [value, setValue] = useState([""]);
    const navigate = useNavigate()
    function handleSubmit(e) {

        e.preventDefault();
        props.setTables(value)
        navigate("/visuals");


    }
    const V1 = ["hadcrutglobalannual", "hadcrutglobalmonthly", "hadcrutnorthernannual", "hadcrutnorthernmonthly", "hadcrutsouthernannual", "hadcrutsouthernmonthly"]
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit" value={V1} onClick={(e) => setValue(e.target.value)}>V1</button>
            </form>
            <h1>Create a visual</h1>
            <form onSubmit={handleSubmit}>
                {V1.map(e => <><label for={e}>{e}</label><input type="checkbox" id={e} value={e} /><br></br></>)}
            </form>
        </>

    );
}

export default Home;