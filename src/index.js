import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './theme/globalStyles.css';
import Routes from './Routes';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
