import React, { useState, useEffect } from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import {UI_Login_Title} from '../../common/uistrings';
import {showDebugMessage} from '../../common/consolehelper';
import Member from '../Member/Member';
import { useFormik } from 'formik';
import { Route, Switch,  BrowserRouter as Router, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const styleCenter =  {
    width: "600px",
    height: "300px",
    position: "absolute",
    top: "50%",
    left: "50%",        
    margin: "-150px 0 0 -300px"
};

const Login = (props) => {

    const [isMember, setMemberFlag] = useState(false);

    const loginFormik = useFormik(
        {
            initialValues : {
                name : '',
                pwd : ''
            },

            onSubmit: values => {
               const data = JSON.stringify(values, null, 2);
               console.log(data);
               const result = true;
               setMemberFlag(result);
            }
        });

    useEffect(()=>
    {        
        showDebugMessage('init');             
    }, []);

    /**
    useEffect(()=>
    {        
        if(isMember){
            showDebugMessage('result from server');    
            <Redirect to='/member'></Redirect> 
        }

    }, [isMember]);*/

    function renderLogin() {
        return (
            <Form onSubmit={loginFormik.handleSubmit}>
            <div style={styleCenter} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{UI_Login_Title.welcome}</Card.Title>
                        <Card.Text>
                        {UI_Login_Title.name} 
                        <Form.Control type="email" name="name" value={loginFormik.values.name} onChange={loginFormik.handleChange} />
                        {UI_Login_Title.password}  <br/>
                        <Form.Control type="password" name="pwd" value={loginFormik.values.pwd} onChange={loginFormik.handleChange}/></Card.Text>
                        <button type="submit" className="btn btn-primary">{UI_Login_Title.button_login}</button>
                    </Card.Body>
                </Card>     
            </div>       
            </Form>
        );
    }

    return (
        <>        
           { isMember ? <Member {...loginFormik.values}/> : renderLogin() }
        </>
    );
}


export default Login