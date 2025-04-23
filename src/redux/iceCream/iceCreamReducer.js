import { BUY_ICECREAM } from "./iceCreamTypes";

const initiaState ={
    numOfIceCream:20
}

const iceCreamReducer =(state=initiaState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default:return state
    }
}

export default iceCreamReducer