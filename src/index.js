import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store.js";

import "./styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("State init : ", store.getState());
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
