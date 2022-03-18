import React, {useContext} from 'react';

import gameContext from '../context/gameContext';

function City({history}) {

  const {login} = useContext(gameContext)

  return (
    <section>
      <p>Login: </p>
      <p>{ login }</p>

      <button type="button" onClick={() => history.push('/')}>
        Voltar
      </button>
    </section>
  );
}

export default City;