import Axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import CoinCard from '../Components/CoinCard';
import { Outlet, useSearchParams } from 'react-router-dom';

function Home() {
  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    reloadData();
  }, []);

  const filterCoins = coinList.filter((coin) => {
      return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const reloadData = () => {
    setIsLoading(true);
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
      (response) => {
        console.log(response.data);
        setIsLoading(false);
        setCoinList(response.data.coins);
      }
    );
  }

  return (
    <div className='App'>
      <div className='coinHeader'>
        {/* <h1>Search For Top Cryptocurrencies.</h1> */}
          <input type='text' placeholder='Search crypto...' onChange={searchHandler} />
          <button onClick={reloadData}>REFRESH</button>
      </div>
      <div className='coinView'>
        {isLoading && <h1 className='loadingMsg'>Loading...</h1>}
        {filterCoins.map((coin) => {
          return <CoinCard name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
        })}
      </div>
    </div>
  );
}

export default Home;
