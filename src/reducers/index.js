import addtocartReducer from "./addtocartReducer"
import clicktocartReducer from "./clicktocartReducer"
import {combineReducers} from "redux"

const allreducers=combineReducers({
    addtocart:addtocartReducer,
    cartclik:clicktocartReducer 
})
export default allreducers