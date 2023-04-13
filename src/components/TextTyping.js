import React, { useEffect } from "react";

const TextTyping = () => {
    let array = [
        "réemploi",
        "écoconception",
        "création",
        "agencement",
        "formation",
    ];
    let wordIndex = 0;
    let letterIndex = 0;
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
                wordIndex = 0;
            }
            if (letterIndex < array[wordIndex].length) {
                createLetter();
                letterIndex++;
                loop();
                setTimeout(() => {
                    removeLetter();
                }, 2800);
            } else {
                wordIndex++;
                letterIndex = 0;
                setTimeout(() => {
                    loop();
                }, 2800);
            }
        }, 60);
    };
    useEffect(() => {
        loop();
    }, []);
    return (
        <div className="targetContainer">
            <h3>#</h3>
            <h3 id="target"> </h3>
        </div>
    );
};

export default TextTyping;

// On démarre les compteurs à 0

// on crée des balises span à la volée, auxquelles on attribut une class qui servira a les cibler afin de les supp par la suite
// la classe l'id target à été attribué a un h3 qui ne contiens pour le moment que un espace
// on designe letter comme l'enfant de target

// en setTimeout on crée une fonction récursive qui va venir lire chaques lettres du mot actuel et les injecter
// on commence par verifier et le cas echeant rebooter wordIndex
// on on crée des lettres tant que l'on peut puis on passe au mot suivant et on reeboote letter index
// entre chaque mots un pause permet de bien lire le mot, puis on l'éfface.

// note que tu as passé quasi 24h pour que ce bout de code soit opérationnel ;)
