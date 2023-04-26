import { useState } from "react";
import ConexionModal from "./ConexionModal";

const User = () => {
    // const [scrollEffect, setScrollEffect] = useState(true);
    // // // Événément au scroll ==> remonte les beurger/user_btn quand je scroll vers le bas, les descends quand je scroll vers le haut
    // // const nav = document.querySelector("#user_btn");

    // window.addEventListener("scroll", () => {
    //     let y = 0;
    //     if (window.scrollY > y && window.scrollY > 70) {
    //         setScrollEffect(false);
    //         //     nav.style.top = "-60px";
    //         // } else nav.style.top = 0;
    //         console.log("false");
    //         y = window.scrollY;
    //     } else if (window.scrollY < y && window.scrollY > 70) {
    //         setScrollEffect(true);
    //         console.log("true");
    //         y = window.scrollY;
    //     }
    // });
    const [modalHidden, setModalHidden] = useState(false);

    return (
        <>
            <button
                className="user_btn"
                id="user_btn"
                onClick={() => {
                    modalHidden ? setModalHidden(false) : setModalHidden(true);
                }}
            >
                {modalHidden ? (
                    <i class="fa-solid fa-xmark"></i>
                ) : (
                    <i class="fa-regular fa-user"></i>
                )}
            </button>
            <div
                id="user-modal-container"
                className={`${modalHidden ? "active" : "hidden"}`}
            >
                {modalHidden ? <ConexionModal /> : ""}
            </div>
        </>
    );
};

export default User;
