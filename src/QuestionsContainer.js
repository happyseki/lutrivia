import React, { Component } from 'react';
class QuestionsContainer extends Component{
  render(){
    // console.log(this.props.questions)
   const questionLis = this.props.questions.map(question=>{
        return  <li>{question.text}<button>true</button><button>false</button></li>
   })
    return(
        <div className="questions">
        <ul>{questionLis}</ul>
        </div>
    )
  }
}
 export default  QuestionsContainer
