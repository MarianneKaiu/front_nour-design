import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="error">Page Not Found</div>
            <NavLink to="/">
                <button>Retour à l'accueil</button>
            </NavLink>
        </div>
    );
};

export default NotFound;
