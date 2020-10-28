import Counter from '../states/counter'
import EventTableDef from '../events/eventTableDef'


const handlerConuter = (state = Counter, action) => {

    let result = state;

    switch (action.type){
        case EventTableDef.CounterEvent.plus:
            result = {...state, value: state.value + 1}
            break;
        default:
            result = state;
    }

    return result;
}

export default handlerConuter;