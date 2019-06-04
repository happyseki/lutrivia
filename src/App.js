import React from 'react';
import data from './data.js';
import QuestionsContainer from './QuestionsContainer.js';
import Score from './Score.js';
import NewGame from './NewGame.js';
import Form from './Form.js';

class App extends React.Component {

  state = {
    game:false
  }

  handleNewGame= ()=>{
    this.setState({
      game:true
    })
  }

  render(){
      return (
      <div className="App">
        <h2>Lutrivia</h2>
        <NewGame game={this.state.game} started={this.handleNewGame}/>
        <Score />
        <QuestionsContainer questions={data.questions} game={this.state.game}/>
        <Form />
      </div>
    )
  }
}

export default App;
