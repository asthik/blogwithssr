import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '../src/components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { createStore, applyMiddleware } from 'redux';
// import rootreducer from './redux/rootreducer';

// import Tester from './components/Tester';

// const store = createStore(rootreducer, {}, applyMiddleware());

import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
  
  // ReactDOM.hydrate(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>,
  //   document.getElementById('root')
  // );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
