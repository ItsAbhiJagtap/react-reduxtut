import { BUY_BHEL } from "./bhelType"

const initialstate ={
    numOfBhel:25
}

const bhelReducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUY_BHEL:return{
            
             ...state,
                numOfBhel:state.numOfBhel-1
        }
        default:return state
        }
    }
export default bhelReducer