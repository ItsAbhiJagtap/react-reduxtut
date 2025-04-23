import React from "react";
import { connect } from "react-redux";
import { buyMastani } from "../redux";

const MastaniContainer = (props) => {
  return (
    <div>
      <h2>Number of Mastanis-{props.numOfMastani}</h2>
      <button onClick={props.buyMastani}>Buy Mastani</button>
    </div>
  )
}

const mapStateToProps = state =>({
    numOfMastani:state.mastani.numOfMastani
})
const mapDispatchToProps =dispatch=>{
    return{
        buyMastani:()=>dispatch(buyMastani())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MastaniContainer)
