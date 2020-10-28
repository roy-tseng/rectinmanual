import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterEventGenerator from '../../store/events/actionCounter'
import EventTableDef from '../../store/events/eventTableDef'
import "./member.scss"

const Member = (props) => {

    const dispatch = useDispatch()
    const value = useSelector(state => state.Counter.value)
    
    const [name, setName] = useState("default name");

    const styleA= {
        "":""
    }

    useEffect(()=>{
        props.name && setName(props.name)
    }
    ,[])

    function plusValue() {

        dispatch(counterEventGenerator(EventTableDef.CounterEvent["+"], value));
    }

    return(
        <>
            <span> name : {props.name}</span><p/>                 
            <span> value : {value}</span>&nbsp;&nbsp;<button onClick={plusValue}>+</button>                 
        </>
    );
}

export default Member;