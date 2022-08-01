import { combineReducers } from "redux";

const startState = {};
const detailsFormReducer = (state = startState, action) => {
    console.log(action.type);
    if (action.type === 'details') {
        return action.payload;
    }
    return state;
}

const combinedReducer = combineReducers({
    details: detailsFormReducer
})

export default combinedReducer;