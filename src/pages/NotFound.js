import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Not found</h1>
            <h2>Erreur 404</h2>
            <NavLink to="/">
                <button>Retour à l'accueil</button>
            </NavLink>
        </div>
    );
};

export default NotFound;
