import React from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
    return (
        <>
            <header>
                <BurgerMenu />
                <User />
                <Logo />
            </header>
        </>
    );
};

export default Header;
