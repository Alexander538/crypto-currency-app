import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import '../App.css';
import { Button } from '@mui/material';

function List() {
  const [coinList, setCoinList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('name') || '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    reloadData();
  }, []);

  const filterCoins = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const searchHandler = (e) => {
    const name = e.target.value;
    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
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
  };

  return (
    <div className='App'>
      <div className='coinHeader'>
        <input
          type='text'
          placeholder='Search crypto...'
          value={searchTerm}
          onChange={searchHandler}
        />
        <button onClick={reloadData}>REFRESH</button>
      </div>
      <div className='coinView'>
        {isLoading && <h1 className='loadingMsg'>Loading...</h1>}
        {filterCoins.map((coin, i) => (
          <div className='coinCard'>
            <h1> Name: {coin.name} </h1>
            <img src={coin.icon} />
            <h3> Price: $ {coin.price.toFixed(2)}</h3>
            <h3> Symbol: {coin.symbol}</h3>
            <Button variant='text' component={RouterLink} to={`/coin/${coin.id}`}>Details</Button>
            {/* <RouterLink to={`/coin/${coin.id}`}>Details</RouterLink> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
