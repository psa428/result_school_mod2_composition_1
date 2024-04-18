import { useState } from 'react';
import '../App.css';
import { Information } from '../Information/information';
import { Field } from '../Field/field';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const startField = [
                        ['', '', ''],
                        ['', '', ''],
                        ['', '', '']
                     ];
  const [field, setField] = useState(startField);

  const newGame = () => {
    /********************************************************
        Подготовка к началу новой игры
    *********************************************************/
      //  Очистим игровое поле
        setField(startField);

      //  Зададим начальные значения переменных
        setIsGameEnded(false);
        setIsDraw(false);
        setCurrentPlayer('X');
  };

  

  const gameOver = () => {
    /*********************************************************
     *  Игра окончена?
     *  Если да, вернем победителя
     **********************************************************/
    const players = ['0', 'X'];
    let tmp = [];

    for (let player of players){
      //  Ищем победителя по горизонтали
      console.log('Ищем победителя по горизонтали');
      for (let str of field) {
        let res = str.every((element) => element === player);
        if (res) 
          return player + ' победил по горизонтали'
          // console.log(`По горизонтали Победил игрок: ${player}`);
      };
      
      //  Ищем победителя по вертикали
      console.log('Ищем победителя по вертикали');
      tmp.splice(0, 3);
      for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++){
          tmp.push(field[i][j]);
          
        };  
        console.log(`gameOver tmp = ${tmp}`);
        let res = tmp.every((element) => element === player);
        if (res)
          return player + ' победил по вертикали'
        tmp.splice(0, 3);

      };

      //  Ищем победителя по диаганали
      console.log('Ищем победителя по диагоналт');

      tmp.splice(0, 3);
      tmp.push(field[0][0], field[1][1], field[2][2]);
      let res = tmp.every((element) => element === player);
      if (res)
        return player + ' победил по диагонали'
      tmp.splice(0, 3);
      tmp.push(field[0][2], field[1][1], field[2][0]);
      res = tmp.every((element) => element === player);
      if (res)
        return player + ' победил по диагонали'

      
    }; 
    return '';
  } ;
                      

  const treatOnClick = (i, j) => {
    /********************************************************
      Функция обработки события выполнения хода игроком
    **********************************************************/
    
    if (field[i][j] !== 'X' && field[i][j] !== '0') {
      //  Поставим крестик или нолик в выбранную клетку, если она свободна
      let tmpField = [...field];
      tmpField[i][j] = currentPlayer;
      setField(tmpField);

      

      //  Игра окончена?
      if (gameOver() !== '')
        // установим признак завершения игры
        setIsGameEnded(true);
      else
        //  Сменим текущего игрока
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');  
    }
  };   
  
  console.log(`currentPlayer = ${currentPlayer} isGameEnded = ${isGameEnded}`);
  return (
    <div className="App">
      <Information player={currentPlayer} gameState={isGameEnded} draw={isDraw}/> 
      <Field field={field} onClickCeil={treatOnClick}/>
      <button onClick={() => newGame()}>Новая игра</button>
    </div>
  );
}

export default App;
