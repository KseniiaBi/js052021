import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'

const render = () => ReactDOM.render(
	<Provider store={store}>
       <App />
	</Provider>,
  document.getElementById('root')
);

render();

store.subscribe(render);

