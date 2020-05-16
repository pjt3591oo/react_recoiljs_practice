import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

import {
  RecoilRoot,
} from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Counter />
      <TodoList />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
