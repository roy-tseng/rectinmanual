import Lobby from "./components/Lobby/Lobby"
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import HandlerCollection from "./store/handlers/handlerCollection"

const store = createStore(HandlerCollection);

ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <Lobby/>
          </Provider>
        </React.StrictMode>,
        document.getElementById("app")
);