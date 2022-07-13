import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';
import TruckReg from './TruckReg';
import Navbar from './Navbar';
import Recipe from '../Views/Recipe';



const theme = {
  colors: {
    primary: '#65ACA8',
    secondary: '#BC5528',
    other: '#13637C',
    bg: '#fff'
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
            <Route path='/signup' element={<TruckReg/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
          </Routes>
          
        </>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
