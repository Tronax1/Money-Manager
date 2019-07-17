import { combineReducers } from "redux";

import authReducer from "./authReducer";
import dataReducer from "./dataReducer"
import premiumReducer from "./premiumReducer"
import incomeReducer from "./incomeReducer"

export default combineReducers({
    auth: authReducer,
    Expense: dataReducer,
    Premium: premiumReducer,
    Income: incomeReducer
});