const initialQueryState = {
    list: []
}

function queries(state = initialQueryState, action) {
    switch(action.type) {
        case "ADD_QUERY":
            return {
                
                ...state,
                list: [...state.list, action.query]
            }
            break;   
    }
    return state;
}

export default queries;