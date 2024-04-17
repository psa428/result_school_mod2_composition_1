import { useState } from 'react';
import '../App.css';
import { Information } from '../Information/information';
import { Field } from '../Field/field';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  // const startField = 
  const [field, setField] = useState([
                                      ['1', '2', '3'],
                                      ['4', '5', '6'],
                                      ['7', '8', '9']
                                    ]);

    // console.log(`player = ${currentPlayer}`);                                   
  return (
    <div className="App">
      <Information player={currentPlayer} gameState={isGameEnded} draw={isDraw}/> 
      <Field field={field}/>
    </div>
  );
}

export default App;
