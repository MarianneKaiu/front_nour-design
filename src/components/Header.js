import React from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

const Header = () => {
    return (
        <>
            <header>
                <BurgerMenu />
                <Logo />
            </header>
        </>
    );
};

export default Header;
