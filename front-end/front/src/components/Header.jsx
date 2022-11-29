import React from "react";
import Styles from "./Styles.css";

function Header()
{
    return(
    <React.Fragment>
        <nav className="navbar navbar-expand-lg" id="headerbg">
            <div className="container">
                    <a className="navbar-brand" href="#">Visualisointityökalu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Koti</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Linkit</a>
                         </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tyylit
                            </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Esimerkki 1</a></li>
                            <li><a className="dropdown-item" href="#">Esimerkki 2</a></li>
            
                            <li><a className="dropdown-item" href="#">Esimerkki 3</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Testit</a>
                        </li>
                    </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Etsi" aria-label="Etsi"/>
                    <button className="btn btn-outline-success" type="submit">Etsi</button>
                </form>
                </div>
            </div>
        </nav>
    </React.Fragment>

    );
}

export default Header;