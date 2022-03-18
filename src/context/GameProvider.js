import gameContext from './gameContext';
import {useState} from 'react'

function GameProvider({ children }) {

  const [login, setLogin] = useState('');

  function newLogin(login) {
    setLogin(login)
  }

  return (
    <gameContext.Provider value={{ login, newLogin }}>
      {children}
    </gameContext.Provider>
  );
}

export default GameProvider;