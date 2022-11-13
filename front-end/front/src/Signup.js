import React, { useState, useEffect } from 'react';
export default function Search() {
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [Password2, setPassword2] = useState("");
    const [Error, setError] = useState("");
    const [ShowModal, setShowModal] = useState(false);
    const [isToggled, setIsToggled] = useState(false);


    function handleSignUp(e) {
        if (Password !== Password2) {

            setError("Passwords dont match!");
        } else if (Password.length < 5) {
            setError("Password is not long enough! Min 5 chars");
        } else {

            setPassword("");
            setError("");
            setPassword("");
            setPassword2("");
            setName("");

        }
        e.preventDefault();
    }

    function handleLogin(e) {



        e.preventDefault();
    }

    return (
        <>
            <button onClick={() => setShowModal(true)} id="myBtn">Käyttäjä</button>
            {ShowModal && (
                <div id="myModal" className="modal">

                    <div className='SignUp-Wrap'>
                        {Error !== "" && (<span className="Error">{Error}</span>)}
                        <div className='Form-Wrap'>
                            <span onClick={() => setShowModal(false)} className="close">&times;</span>
                            {isToggled ?
                                <div className="SignUp">
                                    <h1>Rekisteröidy</h1>
                                    <form onSubmit={handleSignUp}>
                                        <input id="name" type="text" value={Name} placeholder="Nimi" onChange={(e) => setName(e.target.value)}></input>
                                        <input id="password" type="password" value={Password} placeholder="Salasana" onChange={(e) => setPassword(e.target.value)}></input>
                                        <input id="password" type="password" value={Password2} placeholder="Varmista salasana" onChange={(e) => setPassword2(e.target.value)}></input>
                                        <input id='nappi' type="submit" value="Rekisteröidy!"></input>
                                    </form>
                                </div>
                                :
                                <div className="LogIn">
                                    <h1>Kirjaudu</h1>
                                    <form onSubmit={handleLogin}>
                                        <input id="name" type="text" value={Name} placeholder="Nimi" onChange={(e) => setName(e.target.value)}></input>
                                        <input id="password" type="password" value={Password} placeholder="Salasana" onChange={(e) => setPassword(e.target.value)}></input>
                                        <input id='nappi' type="submit" value="Kirjaudu!"></input>
                                    </form>
                                </div>
                            }

                            <button id='switch' onClick={() => setIsToggled(!isToggled)}>{isToggled ? <span>Minulla on jo käyttäjä</span> : <span>Minulla ei ole vielä käyttäjää</span>}</button>
                        </div>

                    </div >
                </div>
            )
            }
        </>
    )
}