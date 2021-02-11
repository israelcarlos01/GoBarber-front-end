import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400;700&display=swap');

  //atribui estilo a todos os elementos...
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  /*
    Pega todos os elementos que recebe focus e tira o outline
    geralmente ficam ao redor de input ou button
  */
  *:focus {
    outline: 0;
  }

  html, body, #root {
    // Ocupa a altura máxima da tela
    height: 100%;
  }

  body {
    // faz com que as fontes fiquem mais definidas
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }


`;
