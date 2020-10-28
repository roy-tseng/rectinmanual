import React, { useState } from 'react'
import Login from "../Login/Login"
import { Route, Switch,  BrowserRouter as Router, Redirect} from "react-router-dom";
import Member from "../Member/Member"
import PageHelper from "../../common/pagehelper"

const Lobby = () =>{

    const [name, setName] = useState();

    function getRouterRender(){
        return (
            <Router>
            <Switch>
                <Route exact path ='/' component={Login}/>
                <Route exact path ='/member' component={Member}/>
                <Route path ='*' render = {() => PageHelper.page_404 }/>
            </Switch>               
            </Router>
        );
    }

    function getNoRouterRender(){
        return <Login/>                        
    }

    return (
        <>
            {getNoRouterRender()}
        </>
    )
}

export default Lobby;