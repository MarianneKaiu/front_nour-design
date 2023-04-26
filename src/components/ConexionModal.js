// d'avance, je suis désolée pour ce code...
// Avec ses 300 lignes il n'est pas évident à lire
// // Je vais tenter de l'expliquer :
// -------Dans le formulaire je demande MDP et Login à l'utilisateur
// CAS 1=======> l'utilisateur est deja connu : handleSubmitLogin()
// Dans la res. je récupère l'id de l'utilisateur et son pseudo,
// Je les envoie dans le store
// La fenêtre se ferme
// K2 (j'aime la montagne) =======> l'utilisateur est inconnu :
// J'affiche 2 inputs supplémentaires et un UL qui aide à remplir les contraintes du MDP
// Avec passwordVerification() je vérifie que les input password & password2 sont strictement identiques, puis je vérifie que les contraintes du MDP sont toutes true, si l'une ou l'autre des ces conditions ne sont pas remplies, j'affiche un <p> qui contiens un message d'erreur. Ce <p> disparâit dès que l'utilisateur tâpe dans l'input.
// Si la verification du password est ok, la fonction handleSubmitCreateAcount est appelée, elle post les données via axios dans la BDD.
// Puis elle appele la fonction handleSubmitLogin()

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../feature/user.slice";

const ConexionModal = () => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const [password2, setPassword2] = useState("");
    const [password2IsVisible, setPassword2IsVisible] = useState(false);

    //useState qui va servir a une ternaire pour afficher un message d'erreur si les passwords 1&2 ne sont pas identiques
    const [equalError, setEqualError] = useState(false);

    // REGEX de Verification de mots de passe
    const passwordHasNumber = /[0-9]/.test(password);
    const passwordHasUppercase = /[A-Z]/.test(password);
    const passwordHasLowercase = /[a-z]/.test(password);
    const passwordHasSpecialCharactere =
        /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(password);
    const passwordHasValidLength = password.length >= 6;
    const [validationError, setValidationError] = useState("");

    useEffect(() => {
        dispatch(getUser(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

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
                setUserId(res.data.data.userId);
                localStorage.setItem("token", JSON.stringify(res.data.token));
            });
        setEmail("");
        setPassword("");
    };
    //Fonction qui vérifie la stricte égalité des password 1&2 en cas de création de compte, ainsi que sa validité puis qui renvoie a la fonction de création de compte si tout est ok
    const passwordVerification = (e) => {
        e.preventDefault();
        if (password !== password2) {
            setEqualError(true);
        } else if (
            passwordHasLowercase === false ||
            passwordHasNumber === false ||
            passwordHasUppercase === false ||
            passwordHasValidLength === false ||
            passwordHasSpecialCharactere === false
        ) {
            setValidationError(true);
        } else {
            handleSubmitCreateAcount(e);
        }
    };

    //création de compte du l'utilisateur et login immédiat de celui-ci
    const handleSubmitCreateAcount = (e) => {
        e.preventDefault();
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
                        <div className="password">
                            <input
                                type={passwordIsVisible ? "text" : "password"}
                                value={password}
                                placeholder="Mon mot de passe"
                                onChange={(e) => {
                                    setEqualError(false);
                                    setValidationError(false);
                                    setPassword(e.target.value);
                                }}
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPasswordIsVisible(!passwordIsVisible);
                                }}
                            >
                                {passwordIsVisible ? (
                                    <i class="fa-solid fa-eye-slash"></i>
                                ) : (
                                    <i class="fa-solid fa-eye"></i>
                                )}
                            </button>
                        </div>
                        {newAcount ? (
                            <div className="password">
                                <input
                                    type={
                                        password2IsVisible ? "text" : "password"
                                    }
                                    value={password2}
                                    placeholder="Confirmer mot de passe"
                                    onChange={(e) => {
                                        setEqualError(false);
                                        setValidationError(false);
                                        setPassword2(e.target.value);
                                    }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPassword2IsVisible(
                                            !password2IsVisible
                                        );
                                    }}
                                >
                                    {password2IsVisible ? (
                                        <i class="fa-solid fa-eye-slash"></i>
                                    ) : (
                                        <i class="fa-solid fa-eye"></i>
                                    )}
                                </button>
                                <ul>
                                    <li
                                        style={{
                                            color: !passwordHasLowercase
                                                ? "rgb(156, 26, 32)"
                                                : "green",
                                        }}
                                    >
                                        Une minuscule
                                    </li>
                                    <li
                                        style={{
                                            color: !passwordHasUppercase
                                                ? "rgb(156, 26, 32)"
                                                : "green",
                                        }}
                                    >
                                        Une majuscule
                                    </li>
                                    <li
                                        style={{
                                            color: !passwordHasSpecialCharactere
                                                ? "rgb(156, 26, 32)"
                                                : "green",
                                        }}
                                    >
                                        Un caractère spécial
                                    </li>
                                    <li
                                        style={{
                                            color: !passwordHasNumber
                                                ? "rgb(156, 26, 32)"
                                                : "green",
                                        }}
                                    >
                                        Un chiffre
                                    </li>
                                    <li
                                        style={{
                                            color: !passwordHasValidLength
                                                ? "rgb(156, 26, 32)"
                                                : "green",
                                        }}
                                    >
                                        Minimum 6 caractères
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            ""
                        )}
                        {equalError ? (
                            <p>
                                Les mots de passe soumis ne sont pas identiques
                            </p>
                        ) : (
                            ""
                        )}
                        {validationError ? (
                            <p>
                                Le mot de passe soumis ne valide pas les
                                contraintes de création
                            </p>
                        ) : (
                            ""
                        )}
                        {newAcount ? (
                            <input
                                type="submit"
                                value="Créer mon compte"
                                onClick={(e) => {
                                    passwordVerification(e);
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
