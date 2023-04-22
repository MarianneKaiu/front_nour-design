import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import "./styles/index.scss";
import App from "./App";
import reducer from "./store/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

//création du store
const store = configureStore(reducer);

store.subscribe(() => {
    //à chaque changement du state, on enregistre sa nouvelle version dans le storage
    sessionStorage.setItem("basket", JSON.stringify(store.getState()));
});

console.log("State init : ", store.getState());
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
