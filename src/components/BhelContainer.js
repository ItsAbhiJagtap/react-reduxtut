import React from 'react'
import { connect } from 'react-redux'
import { buyBhel } from '../redux'

function BhelContainer(props){
  return (
    <div>
        <h2>Num of Bhel-{props.numOfBhel}</h2>
        <button onClick={props.buyBhel}>Buy Bhel</button>      
    </div>
  )
}

const mapStateToProps =state=>({
    numOfBhel:state.bhel.numOfBhel
})
const mapDispatchToProps =dispatch=>{
    return{
        buyBhel:()=>dispatch(buyBhel())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(BhelContainer)