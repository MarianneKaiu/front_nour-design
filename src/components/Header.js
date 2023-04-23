import React from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
    return (
        <>
            <header>
                <div className="header_btn-container">
                    <BurgerMenu />
                    <User />
                </div>
                <Logo />
            </header>
        </>
    );
};

export default Header;
