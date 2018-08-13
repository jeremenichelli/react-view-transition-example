import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import Nav from './Nav'
import Home from './views/Home'
import About from './views/About'
import Author from './views/Author'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav/>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/author" component={Author} />
                    <Route path="/about" component={About} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}
  
  export default App;
