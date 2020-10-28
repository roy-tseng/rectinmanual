import React from 'react'
import { useSelector } from 'react-redux'

const Equipment = (props) => {

    const value = useSelector(state => state.Counter.value)

    return(
        <>               
            <span> value : {value}</span>                  
        </>
    );
}

export default Equipment;