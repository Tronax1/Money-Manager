import { FETCH_DATA } from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return action.payload;
        default:
            return state;
    }
};