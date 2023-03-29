import React, { useEffect, useState } from "react";
import BurgerMenu from "../components/BurgerMenu";

const Comment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [comment, setComment] = useState(null);

    useEffect(() => {
        fetch("/assets/db.json");
    });
    return (
        <div className="blog-container">
            <BurgerMenu />

            <h1>Laissez nous un commentaire</h1>
            <div>
                <form>
                    <input type="text" placeholder="Nom" />
                    <textarea placeholder="Votre message"></textarea>
                    <input type="submit" value="Envoyer"></input>
                </form>
            </div>
            <ul></ul>
        </div>
    );
};

export default Comment;
