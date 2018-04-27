import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import ThreadList from './connectors/threadList.connector';
import ChatWindowManager from './connectors/chatWindowManager.connector';

const store = createStore(reducers, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <ThreadList />
        <ChatWindowManager />
        </div>
      </Provider>    
    );
  }
}

export default App;
