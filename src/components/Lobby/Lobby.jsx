import React, { useState } from 'react'
import Login from "../Login/Login"
import { Route, Switch,  BrowserRouter as Router, Redirect} from "react-router-dom";
import Member from "../Member/Member"
import PageHelper from "../../Common/pagehelper"

const Lobby = () =>{

    const [name, setName] = useState();

    return (
        <>
        <Router>
        <Switch>
            <Route exact path ='/' component={Login}/>
            <Route path ='*' render = {() => PageHelper.page_404 }/>
        </Switch>               
        </Router>
        </>
    )
}

export default Lobby;