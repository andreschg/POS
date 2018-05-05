import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRouter from './routes/AppRouter';
import './styles/styles.scss';

const App = () => (
  <MuiThemeProvider>
    <AppRouter />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);