import Axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import CoinCard from '../Components/CoinCard';

function Home() {
  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
      (response) => {
        setCoinList(response.data.coins);
      }
    );
  }, []);

  const filterCoins = coinList.filter((coin) => {
      return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='App'>
      <div className='coinHeader'>
          <input type='text' placeholder='Search crypto...' onChange={(event) => {setSearch(event.target.value)}} />
      </div>
      <div className='coinView'>
        {filterCoins.map((coin) => {
          return <CoinCard name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
        })}
      </div>
    </div>
  );
}

export default Home;
