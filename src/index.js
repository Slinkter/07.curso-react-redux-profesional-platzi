import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const store = createStore(pokemonsReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
