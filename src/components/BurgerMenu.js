// Évenement au click pour sortir la side bar
// créer en css un hamburger qui se transforme en croix
// Ranger la side bar lorsqu'on clique sur la croix

import React, { useState } from "react";
import Navigation from "./Navigation";

const BurgerMenu = () => {
    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

    const toggleBm = () => {
        setToggleBurgerMenu(!toggleBurgerMenu);
    };

    return (
        <div
            id="side-bar"
            className={`${toggleBurgerMenu ? "active" : "hidden"}`}
        >
            <div className="toggle-btn" id="btn" onClick={toggleBm}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Navigation />
        </div>
    );
};

export default BurgerMenu;
