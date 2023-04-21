import { useState } from "react";
import ConexionModal from "./ConexionModal";

const User = () => {
    const [modalHidden, setModalHidden] = useState(false);

    return (
        <>
            <button
                className="user_btn"
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
