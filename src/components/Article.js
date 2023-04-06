import axios from "axios";
import React, { useState } from "react";

const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatingContent, setUpdatingContent] = useState("");

    const dateFormater = (createdAt) => {
        let newDate = new Date(createdAt).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        return newDate;
    };

    const handleUpdate = () => {
        const data = {
            userName: article.userName,
            content: updatingContent ? updatingContent : article.content,
            createdAt: article.createdAt,
            uptadedDate: Date.now(),
        };
        axios.put("/api/comments/" + article.id, data).then(() => {
            setIsEditing(false);
        });
    };
    const handleDelete = () => {
        axios
            .delete("/api/comments/" + article.id)
            .then(window.location.reload());
    };

    return (
        <li className="article">
            <div className="article-header">
                <em>Posté le {dateFormater(article.createdAt)}</em>
            </div>
            <div className="article-main">
                <h2>{article.userName}</h2>
                {isEditing ? (
                    <textarea
                        onChange={(e) => {
                            setUpdatingContent(e.target.value);
                        }}
                        autoFocus
                        defaultValue={
                            updatingContent ? updatingContent : article.content
                        }
                    ></textarea>
                ) : (
                    <p>{updatingContent ? updatingContent : article.content}</p>
                )}
            </div>

            <div className="btn-container">
                {!isEditing ? (
                    <button
                        onClick={() => {
                            setIsEditing(true);
                        }}
                    >
                        Edit
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            handleUpdate();
                        }}
                    >
                        Valider
                    </button>
                )}
                <button
                    onClick={() => {
                        if (
                            window.confirm(
                                "Voulez-vous vraiment supprimer l'article ?"
                            )
                        )
                            handleDelete();
                    }}
                >
                    Supprimer
                </button>
            </div>
        </li>
    );
};

export default Article;
