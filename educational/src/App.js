import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import store from './store';


class App extends Component {
  render(){
    return(
      <div className="App">
          <button id="decrement" onClick={() => store.dispatch({type: 'DECREMENT'})
          }>-</button>
          <span className="count">{store.getState()}</span>
          <button id="increment" onClick={() => store.dispatch({type: 'INCREMENT'})}>+</button>
      </div>

      );
  }
}

export default App;