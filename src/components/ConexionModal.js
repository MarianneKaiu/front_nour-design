const ConexionModal = () => {
    return (
        <>
            <section className="userModal">
                <button>
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
                <h2>Mon compte</h2>
                <form action="post">
                    <fieldset>
                        <legend>J'ai déja un compte</legend>
                        <input type="text" placeholder="Mon adresse email" />
                        <input type="text" placeholder="Mon mot de passe" />
                        <input type="submit" value="Se connecter" />
                    </fieldset>
                    <fieldset>
                        <legend>Je n'ai pas de compte</legend>
                        <input type="submit" value="Créer un compte" />
                    </fieldset>
                </form>
            </section>
        </>
    );
};

export default ConexionModal;
