import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import Reducer from './redux/redcuer';
import {Provider} from 'react-redux';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
