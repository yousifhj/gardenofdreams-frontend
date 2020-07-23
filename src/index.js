import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Container } from 'react-bootstrap'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Container>
        <App />
      </Container>
      
    </Provider>
  </Router>,
  document.getElementById('root'));