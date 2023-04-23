import axios from "axios";
import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import Header from "../components/Header";

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
        const token = localStorage.getItem("token");
        const tokenParsed = JSON.parse(token);

        e.preventDefault();
        if (content.length < 130) {
            setError(true);
        } else {
            axios.post(
                "/api/comments",
                {
                    userName,
                    content,
                    createdAt: Date.now(),
                },
                {
                    headers: {
                        Authorization: `Bearer ${tokenParsed}`,
                    },
                }
            );
            setError(false);
            setContent("");
            setUserName("");
            getData();
        }
    };

    const counterContent = (e) => {
        setContent(e.target.value);
        setCount(e.target.value.length);
        setError(false);
    };

    return (
        <>
            <Header />
            <main className="blog-container">
                <h1>vos avis</h1>
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
                    <section>
                        <ul>
                            {blogData
                                .sort((a, b) => b.createdAt - a.createdAt)
                                .map((article) => (
                                    <Article
                                        key={article.id}
                                        article={article}
                                    />
                                ))}
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Blog;
