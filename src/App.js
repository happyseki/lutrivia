import React from 'react';
import data from './data.js';
import QuestionsContainer from './QuestionsContainer.js';
import Score from './Score.js';
import NewGame from './NewGame.js';
import Form from './Form.js';

function App() {
    return (
    <div className="App">
    <NewGame />
    <Score />
    <QuestionsContainer questions={data.questions} />
    <Form />
    </div>
  )
}

export default App;
