import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import TruckReg from './TruckReg';


const theme = {
  colors: {
    primary: '#65ACA8',
    secondary: '#BC5528',
    other: '#13637C',
    bg: '#F4E7CA'
  }
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/registration/truck' element={<TruckReg/>}/>
          </Routes>
          
        </>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
