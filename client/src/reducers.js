import { combineReducers } from "redux";

const startState = [];
const detailsFormReducer = (state = startState, action) => {
    if (action.type == "details") {
        return [...state, {patient: action.payload}];
    }
}

export default detailsFormReducer;