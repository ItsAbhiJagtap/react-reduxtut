import { BUY_MASTANI } from "../mastani/mastaniType"

const initialState ={
    numOfMastani:30
}

const mastaniReducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_MASTANI:return{
            ...state,
            numOfMastani:state.numOfMastani-1
        }
        default: return state
    }

}
export default mastaniReducer