import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
    * {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.bg};
        color: #121212;
        font-family: 'Lato', sans-serif;
        margin: 0; 
    }
`

export default GlobalStyles