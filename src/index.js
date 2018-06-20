import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './views/list/container/ListContainer';
import { Router } from '@reach/router';

ReactDOM.render(
  <Router>
    <List path=":page" />
  </Router>    
, document.getElementById('root'));
