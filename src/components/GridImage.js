import React, { useEffect, useState } from "react";

const GridImage = ({ image }) => {
    const [toggleLoupe, setToggleLoupe] = useState(false);
    // Objectif : réussir à ajouter dynamiquement une class "vertical" et une class "horizontal"
    useEffect(() => {
        console.log(image);
    });

    return (
        <div className="image">
            <img src={`${image.chemin}.jpg`} alt={image.name} />
            <button
                className="loupe-container"
                onClick={() => {
                    toggleLoupe ? setToggleLoupe(false) : setToggleLoupe(true);
                }}
            >
                <i class="fa-solid fa-magnifying-glass loupe"></i>
            </button>
            <div
                id="image-content-container"
                className={toggleLoupe ? "active" : ""}
            >
                <h2>{image.name}</h2>
                <p>{image.description}</p>
            </div>
        </div>
    );
};

export default GridImage;
