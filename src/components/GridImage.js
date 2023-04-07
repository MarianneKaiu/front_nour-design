import React, { useEffect, useState } from "react";

const GridImage = ({ image }) => {
    const [toggleLoupe, setToggleLoupe] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        console.log(image);
    });

    return (
        <div className="image">
            <img src={`${image.chemin}.jpg`} alt={image.name} />
            <div className="button-container">
                <button
                    className="loupe-container"
                    onClick={() => {
                        toggleLoupe
                            ? setToggleLoupe(false)
                            : setToggleLoupe(true);
                    }}
                >
                    <i class="fa-solid fa-magnifying-glass loupe"></i>
                </button>
                <button
                    className="heart-container"
                    onClick={() => {
                        isLiked ? setIsLiked(false) : setIsLiked(true);
                    }}
                >
                    {isLiked ? (
                        <i class="fa-solid fa-heart heart"></i>
                    ) : (
                        <i class="fa-regular fa-heart heart"></i>
                    )}
                </button>
                <button className="trash-container">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button className="updateBtn-container">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
            </div>

            <div
                id="image-content-container"
                className={toggleLoupe ? "active" : ""}
            >
                <div className="image-content-header">
                    <h2>{image.name}</h2>
                </div>

                <p>{image.description}</p>
            </div>
        </div>
    );
};

export default GridImage;
