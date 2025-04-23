import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import mastaniReducer from "./mastani/mastaniReducer"
import bhelReducer from "./bhel/bhelReducer";


const rootReducer =combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    mastani:mastaniReducer,
    bhel:bhelReducer
})

export default rootReducer