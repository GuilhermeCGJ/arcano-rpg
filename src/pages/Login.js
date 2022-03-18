import React, { useState, useContext } from 'react';
import gameContext from '../context/gameContext';

function Login({history}) {
  const [password, setPassword] = useState('');
  const [user, setName] = useState('');
  const {newLogin} = useContext(gameContext);

  function handleSubmit(e) {
    // 1. Prevenir o que vai acontecer
    e.preventDefault();

    // montar o objeto question

    // enviar para o context
    newLogin(user)

    // redirecionar para a home
    history.push('/cidade')

    //
  }

  return (
    <section className="question-section">
      <form onSubmit={handleSubmit}>
      <label htmlFor="user">
          Login:
          <input
            type="text"
            name="user"
            placeholder="Login..."
            id="user"
            value={user}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            placeholder="Senha..."
            id="user"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button">Enviar</button>
      </form>
    </section>
  );
}

export default Login;
