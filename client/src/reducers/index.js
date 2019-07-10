import { combineReducers } from "redux";

import authReducer from "./authReducer";
import dataReducer from "./dataReducer"
import premiumReducer from "./premiumReducer"

export default combineReducers({
    auth: authReducer,
    Expense: dataReducer,
    Premium: premiumReducer
});