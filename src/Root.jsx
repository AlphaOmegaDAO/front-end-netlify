/* eslint-disable global-require */
import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Web3ContextProvider } from './hooks/web3Context';

import App from './App';
import store from './store';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Web3ContextProvider>
        <Provider store={store}>
          <HashRouter basename={'/#'}>
            <App />
          </HashRouter>
        </Provider>
      </Web3ContextProvider>
    );
  }
}
