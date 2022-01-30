import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Coin from './Routes/Coin';
import List from './Routes/List';
import Coins from './Routes/Coins';
import Layout from './Components/Layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='coin/:id' element={<Coin />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    <Outlet />
    </div>
  );
}

export default App;
