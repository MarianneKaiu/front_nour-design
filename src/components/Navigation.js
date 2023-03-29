import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                {/* La ternaire sert a demander si nous sommes sur la page accueil */}
                {/* et dans ce cas passera la classe active */}
                <NavLink
                    to="/"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="/apropos"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>A propos</li>
                </NavLink>
                <NavLink
                    to="/actualites"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Actualités</li>
                </NavLink>
                <NavLink
                    to="/amenagement"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Amenagements</li>
                </NavLink>
                <NavLink
                    to="/meubles"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Meubles</li>
                </NavLink>
                <NavLink
                    to="/petitsObjets"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Petits objets</li>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Contact</li>
                </NavLink>
                <NavLink
                    to="/comment"
                    className={(nav) =>
                        nav.isActive ? "nav-active hover" : "hover"
                    }
                >
                    <li>Vos avis</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
