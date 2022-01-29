import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Coin from './Routes/Coin';

function App() {


  return (
    <div className='App'>
      <Coin />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Coin/:id' element={<Coin />} />
        </Routes>
    </div>
  );
}

export default App;
