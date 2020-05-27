import { combineReducers } from "redux";
import getAllData from "./getDataReducer";
const rootReducer = combineReducers({
    getAllData: getAllData
});
export default rootReducer;
