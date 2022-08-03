import { combineReducers } from "redux";

const detailsFormReducer = (state = [], action) => {
    console.log(action.type);
    if (action.type === 'details') {
        return action.payload;
    }
    return state;
}

const queueStatusReducer = (state = 0, action) => {
    console.log(action.type);
    if (action.type === "queue status") {
        return action.payload;
    }
    return state;
}

const combinedReducer = combineReducers({
    details: detailsFormReducer,
    queueStatus: queueStatusReducer
})

export default combinedReducer;