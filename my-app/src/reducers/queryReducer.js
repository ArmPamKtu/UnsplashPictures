const initialQueryState = {
    list: []
}

function queries(state = initialQueryState, action) {
    switch(action.type) {
        case "ADD_QUERY": 
            let alreadyExists = state.list.includes(action.query);

            if(!alreadyExists && action.query !== "") {
                return {
                    ...state,
                    list: [...state.list, action.query]
                }
            }
            break;
        default:
            return state;            
    }
    return state;
}

export default queries;