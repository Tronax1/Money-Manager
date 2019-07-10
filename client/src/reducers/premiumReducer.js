import { FETCH_PREMIUM } from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_PREMIUM:
            return action.payload
        default:
            return state;
    }
};