import React from 'react'; 
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'; // Recebe o tema e aplica em toda aplicação da página
import { Reset } from 'styled-reset' // Resetação das configurações padrão dos navegadores

import store from './redux/store';
import theme from './theme'; // Importação do Tema
import Home from './Home/index';// Importando a página Home


//import reset from '../node_modules/styled-reset/lib/index';
// encapsulamento da home
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />;
      </ThemeProvider>
    </Provider>

  );
}

export default App;
