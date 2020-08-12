import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MainRouter from './MainRouter';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
