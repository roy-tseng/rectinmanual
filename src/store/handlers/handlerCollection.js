import handlerConuter from "./handlerCounter"
import { combineReducers } from 'redux'

const HandlerCollection = combineReducers( 
    {
        Counter : handlerConuter
    }
);

export default HandlerCollection;