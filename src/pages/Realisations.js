import React, { useEffect, useState } from "react";
import axios from "axios";
import BurgerMenu from "../components/BurgerMenu";
import GridImage from "../components/GridImage";

const Realisations = () => {
    const [imageData, setImageData] = useState([]);
    const getData = () => {
        axios.get("/api/images").then((res) => setImageData(res.data.data));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="realisations-container">
            <BurgerMenu />
            <h1>Nos Réalisations</h1>
            <div className="grid-image-container">
                {imageData.map((image) => (
                    <GridImage key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default Realisations;
