import axios from "axios";
import { useState } from "react";

const ConexionModal = () => {
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    //useState qui va servir a une ternaire pour afficher un message d'erreur si les passwords 1&2 ne sont pas identiques
    const [validationError, setValidationError] = useState("");
    const [paswordIsOk, setPasswordIsOk] = useState(false);

    //useState qui en cas de selection du btn "creer un compte" affichera 2 inputs de plus dans le formulaire pour pseudo et confirmation du mot de passe
    const [newAcount, setNewAcount] = useState(false);

    //Login de l'utilisateur
    const handleSubmitLogin = (e) => {
        e.preventDefault();

        axios
            .post("/api/users/login", {
                eMail: email,
                password: password,
            })
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    console.log(res.data);
                }
            });
        setEmail("");
        setPassword("");
    };
    //Fonction qui vérifie la stricte égalité des password 1&2 en cas de création de compte, puis qui renvoie a la fonction de création de compte si les passwords sont bien égaux
    const passwordEqual = (e) => {
        e.preventDefault();
        if (password !== password2) {
            setValidationError(true);
        } else {
            setPasswordIsOk(true);
            handleSubmitCreateAcount(e);
        }
    };

    //création de compte du l'utilisateur et login immédiat de celui-ci
    const handleSubmitCreateAcount = (e) => {
        e.preventDefault();
        if (paswordIsOk) {
            axios
                .post("/api/users", {
                    userName: pseudo,
                    eMail: email,
                    password: password,
                })
                .then(() => {
                    handleSubmitLogin(e);
                    setValidationError(false);
                    setPseudo("");
                    setEmail("");
                    setPassword("");
                    setPassword2("");
                    setNewAcount(false);
                });
        }
    };
    return (
        <>
            <section className="userModal">
                <h2>Mon compte</h2>
                <form>
                    <fieldset>
                        {newAcount ? (
                            <legend>Créer un compte</legend>
                        ) : (
                            <legend>J'ai déja un compte</legend>
                        )}
                        {newAcount ? (
                            <input
                                type="text"
                                placeholder="Mon Pseudo"
                                value={pseudo}
                                onChange={(e) => setPseudo(e.target.value)}
                            />
                        ) : (
                            ""
                        )}
                        <input
                            type="text"
                            value={email}
                            placeholder="Mon adresse email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            value={password}
                            placeholder="Mon mot de passe"
                            onChange={(e) => {
                                setValidationError(false);
                                setPassword(e.target.value);
                            }}
                        />
                        {newAcount ? (
                            <input
                                type="text"
                                value={password2}
                                placeholder="Confirmer mot de passe"
                                onChange={(e) => {
                                    setValidationError(false);
                                    setPassword2(e.target.value);
                                }}
                            />
                        ) : (
                            ""
                        )}
                        {validationError ? (
                            <p>
                                Les mots de passe soumis ne sont pas identiques
                            </p>
                        ) : (
                            ""
                        )}
                        {newAcount ? (
                            <input
                                type="submit"
                                value="Créer mon compte"
                                onClick={(e) => {
                                    passwordEqual(e);
                                }}
                            />
                        ) : (
                            <input
                                type="submit"
                                value="Se connecter"
                                onClick={(e) => {
                                    handleSubmitLogin(e);
                                }}
                            />
                        )}
                    </fieldset>
                    {!newAcount ? (
                        <fieldset>
                            <legend>Je n'ai pas de compte</legend>
                            <input
                                type="submit"
                                value="Créer un compte"
                                onClick={(e) => {
                                    setNewAcount(true);
                                    e.preventDefault();
                                }}
                            />
                        </fieldset>
                    ) : (
                        ""
                    )}
                </form>
            </section>
        </>
    );
};

export default ConexionModal;
