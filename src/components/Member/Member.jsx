import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterEventGenerator from '../../store/events/actionCounter'
import EventTableDef from '../../store/events/eventTableDef'
import Equipment from '../Equipment/Equipment'

import "./member.scss"

const Member = (props) => {

    const [isEquipmentLoad, setEquipment] = useState(false)
    const dispatch = useDispatch()
    const value = useSelector(state => state.Counter.value)

    function plusValue() {
        dispatch(counterEventGenerator(EventTableDef.CounterEvent.plus, value));
    }

    function getNoRouterRender(){
        
        setEquipment(true)                       
    }

    return(
        <>
            <span> name : {props.name}</span><p/>                 
            <span> value : {value}</span>&nbsp;&nbsp;
            <button onClick={plusValue}>+</button>
            <button onClick={getNoRouterRender}>C</button><p/>
            {isEquipmentLoad && <Equipment />}
        </>
    );
}

export default Member;