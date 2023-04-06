import React, { useState } from "react";

let array = [
    "réemploi",
    "écoconception",
    "création",
    "agencement",
    "formation",
];

const TextTyping = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    const createLetter = () => {
        const target = document.getElementById("target");
        const letter = document.createElement("span");
        letter.classList.add("letter");
        letter.textContent = array[wordIndex][letterIndex];
        target.appendChild(letter);
    };

    const removeLetter = () => {
        const removedLetter = document.querySelector(".letter");
        removedLetter.remove(removedLetter);
    };
    const loop = () => {
        setTimeout(() => {
            if (wordIndex === array.length) {
                setWordIndex(0);
            }
            if (letterIndex < array[wordIndex].length) {
                createLetter();
                setLetterIndex(+1);
                loop();
                setTimeout(() => {
                    removeLetter();
                }, 2800);
            } else {
                setWordIndex(+1);
                setLetterIndex(0);
                setTimeout(() => {
                    loop();
                }, 280000);
            }
        }, 60);
    };
    loop();
    return (
        <div className="targetContainer">
            <h3>#</h3>
            <h3 id="target"> </h3>
        </div>
    );
};

export default TextTyping;
