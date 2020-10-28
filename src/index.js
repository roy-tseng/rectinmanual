import Lobby from "./components/Lobby/Lobby"
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import HandlerCollection from "./store/handlers/handlerCollection"
import { Provider } from "react-redux";

const store = createStore(HandlerCollection);

ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <Lobby/>
          </Provider>
        </React.StrictMode>,
        document.getElementById("app")
);