import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import 'bootstrap';
import store from './store/configureStore';
import './styles/styles.scss';
import './scripts/sidebar';

const App = () => (
  <Provider store={store} > 
    <MuiThemeProvider>
      <AppRouter />
    </MuiThemeProvider>
  </Provider>
);

console.log(store.getState());

ReactDOM.render(
  <App />,
  document.getElementById('app')
);