import React, { useEffect, useState } from "react";
import axios from "axios";
import GridImage from "../components/GridImage";
import Header from "../components/Header";

const Realisations = () => {
    const [imageData, setImageData] = useState([]);
    const getData = () => {
        axios.get("/api/images").then((res) => setImageData(res.data.data));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />
            <main className="realisations-container">
                <h1>Nos Réalisations</h1>
                <section className="grid-image-container">
                    {imageData.map((image) => (
                        <GridImage key={image.id} image={image} />
                    ))}
                </section>
            </main>
        </>
    );
};

export default Realisations;
