import React, { Component } from 'react';

class QuestionsContainer extends Component{


  render(){
    console.log(this.props.questions.answer)
    const questionLis = this.props.questions.slice(0,5).map(question=>{
      return  <li>{question.text}
                <button>true</button>
                <button>false</button>
              </li>
    });

    if(this.props.game){
    }else{
      return null

    }



    return(
        <div className="questions">

        <ul>{questionLis}</ul>
        </div>
    )
  }
}
 export default  QuestionsContainer
