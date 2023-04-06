import axios from "axios";
import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import BurgerMenu from "../components/BurgerMenu";

const Blog = () => {
    const [content, setContent] = useState("");
    const [userName, setUserName] = useState("");
    const [blogData, setBlogData] = useState([]);

    const [error, setError] = useState(false);

    const [count, setCount] = useState(0);

    const getData = () => {
        axios.get("/api/comments").then((res) => setBlogData(res.data.data));
    };
    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 130) {
            setError(true);
        } else {
            axios.post("/api/comments", {
                userName,
                content,
                createdAt: Date.now(),
            });
            setError(false);
            setContent("");
            setUserName("");
            window.location.reload();
        }
    };

    const counterContent = (e) => {
        setContent(e.target.value);
        setCount(e.target.value.length);
        setError(false);
    };

    return (
        <div className="blog-container">
            <BurgerMenu />
            <h1>BLOG</h1>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        value={userName}
                        placeholder="Votre Nom"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <textarea
                        style={{
                            border: error ? "1px solid red" : "",
                        }}
                        value={content}
                        placeholder="Votre Message ..."
                        onChange={(e) => counterContent(e)}
                    ></textarea>
                    <p>
                        {error ? (
                            `Veuillez écrire un minimum de 130 caractères`
                        ) : (
                            <em>{count} / 130</em>
                        )}
                    </p>
                    <input type="submit" value="Envoyer" />
                </form>
                <ul>
                    {blogData
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .map((article) => (
                            <Article key={article.id} article={article} />
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Blog;
