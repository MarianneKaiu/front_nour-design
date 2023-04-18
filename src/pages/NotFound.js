import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
    return (
        <main className="not-found">
            <Header />
            <div className="error">Page Not Found</div>
            <NavLink to="/">
                <button>Retour à l'accueil</button>
            </NavLink>
        </main>
    );
};

export default NotFound;
