import React, { useEffect, useState } from 'react'


const Member = (props) => {
    
    const [name, setName] = useState("default name");

    useEffect(()=>{
        props.name && setName(props.name)
    }
    ,[])

    return(
        <span> name : {name}</span>
    );
}

export default Member;