import React, { useState } from "react";
import "../styles/navBar.css";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo" >
                        <img style={{ width: "322px", height: "132px" }} src="./ungrammary.png" alt="" />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a activeclassname="active"
                            id="pad_navbar"
                                className="nav-links">About us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a activeclassname="active"
                            id="pad_navbar"
                                className="nav-links">Solution
                            </a>
                        </li>
                        <li className="nav-item">
                            <a activeclassname="active"
                            id="pad_navbar"
                                className="nav-links">Global Network
                            </a>
                        </li>
                        <li className="nav-item">
                            <a activeclassname="active"
                                className="nav-links">
                                <img style={{ width: "175px", height: "64px" }} src="./contact.png" alt="" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a activeclassname="active"
                                className="nav-links">
                                <img style={{ width: "53px", height: "53px" }} src="./country.png" alt="" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a activeclassname="active"
                                className="nav-links">
                                <img style={{ width: "24px", height: "12px" }} src="./arrow.png" alt="" />
                            </a>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;