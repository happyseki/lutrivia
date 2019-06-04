import React, { Component } from 'react'
class NewGame extends Component{


  render(){
    console.log(this.props)
    return(
      <button onClick={this.props.started}>New Game</button>
    )
  }
}

export default NewGame
