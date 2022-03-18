import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import City from './pages/City';
import GameProvider from './context/GameProvider';

function App() {
  return (
    <GameProvider>
      <main className="App">
        <header className="main-header">
          <section className="main-header-title">
            <h3>
              Trybe Questions
            </h3>
          </section>
        </header>
        <section className="main-section">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/cidade" component={City} />
          </Switch>
        </section>
      </main>
    </GameProvider>
  )
}

export default App;
