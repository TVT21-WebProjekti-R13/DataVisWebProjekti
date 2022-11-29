import React from "react";
import Styles from "./Styles.css"

function Footer()
{
    return(
        <React.Fragment>
            <footer id="footerbg" className='P-4'>

                <div className='container P-4'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>Lisätietoa projektista</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipicing elit,. Iste atque ea quis molestias</p>
                    </div>

                    <div className='col-sm-2'>
                        <h5>Navigointi</h5>
                        <p><a href=''></a>Koti</p>
                        <p><a href=''></a>Lisätietoa projektista</p>
                    </div>

                </div>



                </div>
            </footer>
        </React.Fragment>

    );
}

export default Footer;