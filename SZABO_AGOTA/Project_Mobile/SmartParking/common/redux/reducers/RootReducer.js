import { combineReducers } from "redux";
import {appReducer} from "./appReducer";
//import reducers
export const RootReducer = combineReducers({
    appReducer: appReducer
//add reducers
})