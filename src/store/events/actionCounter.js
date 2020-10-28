import EventTableDef from './eventTableDef'

const counterEventGenerator = (types, payload) => {

    let result = null;

    switch(types){
        case EventTableDef.CounterEvent["+"]: 
        result = {type: types, state: payload};
             break;
        default:
            break;
    }      

    return result;
}

export default counterEventGenerator;