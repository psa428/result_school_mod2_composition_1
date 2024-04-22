import { useState } from 'react';
import '../components/App.css';
import { AppLayout } from '../components/AppLayout/appLayout';
import { gameOver } from '../utils/utils';

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

  

  // const gameOver = () => {
  //   /*********************************************************
  //    *  Игра окончена?
  //    *  Если да, вернем победителя
  //    **********************************************************/
  //     let tmp = new Array(3);
  //     let tmpFull = [];
  //     let res = false;
  //     //  Ничья?
      
  //     tmp = tmpFull.concat(field[0], field[1], field[2]);
      
  //     if (tmpFull.length > 0) 
  //       res = tmpFull.every((element) => (element === 'X' || element === '0'));
      
  //     if (res) {
  //       setIsDraw(true);
  //       return 'Ничья';
  //     };  

  //   const players = ['0', 'X'];
    

  //   for (let player of players){
  //     //  Ищем победителя по горизонтали
      
  //     for (let str of field) {
  //       let res = str.every((element) => element === player);
  //       if (res) 
  //         return player + ' победил по горизонтали'
          
  //     };
      
  //     //  Ищем победителя по вертикали

  //     tmp.splice(0, 2);
  //     for (let j = 0; j < 3; j++) {
  //       for (let i = 0; i < 3; i++){
  //         tmp[i] = field[i][j];
          
  //       };  
        
  //       let res = tmp.every((element) => element === player);
        
  //       if (res)
  //         return player + ' победил по вертикали'
  //       tmp.splice(0, 2);

  //     };

  //     //  Ищем победителя по диаганали
      
  //     tmp[0] = field[0][0];
  //     tmp[1] = field[1][1]; 
  //     tmp[2] = field[2][2];
  //     let res = tmp.every((element) => element === player);
  //     if (res)
  //       return player + ' победил по диагонали'
      
  //     tmp[0] = field[0][2];
  //     tmp[1] = field[1][1];
  //     tmp[2] = field[2][0];

  //     res = tmp.every((element) => element === player);
  //     if (res)
  //       return player + ' победил по диагонали'

      
  //   }; 
  //   return '';
  // } ;
                      

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
      if (gameOver(field, setIsDraw) !== '')
        // установим признак завершения игры
        setIsGameEnded(true);
      else
        //  Сменим текущего игрока
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');  
    }
  };   
  
  
  return (
    <div className="App">
      <AppLayout 
        player={currentPlayer} 
        gameState={isGameEnded} 
        draw={isDraw} 
        fld={field} 
        onClickCeil={treatOnClick} 
        onClickBtn = {newGame}
      />
     
      {/* <Information player={currentPlayer} gameState={isGameEnded} draw={isDraw}/> 
      <Field field={field} onClickCeil={treatOnClick}/>
      <button className="btn" onClick={() => newGame()}>Новая игра</button> */}
    </div>
  );
}

export default App;
