import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *{
    margin:0;
    outline:0;
    box-sizing:border-box;
    padding:0;
  }
  body{
    background:#191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing:antialiased;
  }
  body,input, button{
    font-family: 'Roboto',sans-serif ;
    font-size:14px;
  }
  #root{
    max-width:1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button{
    cursor: pointer;
  }

`;
