import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Coin from './Routes/Coin';
import List from './Routes/List';
import Layout from './Components/Layout';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className='App'>
      {/* <CssBaseline /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
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
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
