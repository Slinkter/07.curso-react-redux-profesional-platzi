import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import rootReducer from "./reducers/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const componsedEnhacers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, componsedEnhacers);
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
