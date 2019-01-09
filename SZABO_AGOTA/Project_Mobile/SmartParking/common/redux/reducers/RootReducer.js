import { combineReducers } from "redux";
import {appReducer} from "./appReducer";
// import {mapReducer} from "./mapReducer"
//import reducers

export const RootReducer = combineReducers({
    appReducer: appReducer,
    // mapReducer: mapReducer
    //add reducers
})