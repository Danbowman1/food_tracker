
import Signup from './Signup';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';

const theme = {
  colors: {
    primary: '#65ACA8',
    secondary: '#BC5528',
    other: '#13637C',
    bg: '#F8F4EA'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Signup/>
      </>
    </ThemeProvider>
    
  );
}

export default App;
