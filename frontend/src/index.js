import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new import
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles/main.css';

// Create a root container instead of using ReactDOM.render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
