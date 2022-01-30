import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams, useLocation, Link } from 'react-router-dom';
import '../App.css';
import Coins from './Coins';

function List() {
  const [coinList, setCoinList] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchTerm = searchParams.get('name') || '';
  const [isLoading, setIsLoading] = useState(false);

  // const location = useLocation(); //route location
  // const path = location.pathname; //url path

  // function HomeView() {
  //   // shows content for home page only
  //   if (path === '/') {
  //     console.log('yo FOol');
  //   } else {
  //     return null;
  //   }
  // }

  useEffect(() => {
    reloadData();
  }, []);

  // const filterCoins = coinList.filter((coin) => {
  //   return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // const searchHandler = (e) => {
  //   const name = e.target.value;
  //   if (name) {
  //     setSearchParams({ name });
  //   } else {
  //     setSearchParams({});
  //   }
  // };

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

  // function getCoinById(id) {
  //   coinList.find((coin) => coin.id === id);
  // }

  return (
    <div className='App'>
      <div className='coinHeader'>
        {/* <h1>Search For Top Cryptocurrencies.</h1> */}
        {/* <input
          type='text'
          placeholder='Search crypto...'
          value={searchTerm}
          onChange={searchHandler}
        /> */}
        <button onClick={reloadData}>REFRESH</button>
      </div>
      <div className='coinView'>
        {isLoading && <h1 className='loadingMsg'>Loading...</h1>}
        {coinList.map((coin, i) => (
          <div className='coinCard'>
            <h1> Name: {coin.name} </h1>
            <img src={coin.icon} />
            <h3> Price: {coin.price}</h3>
            <h3> Symbol: {coin.symbol}</h3>
            <Link to={`/coin/${coin.id}`}>view more</Link>
          </div>
          // return (
          //   <Coins
          //     key={i}
          //     name={coin.name}
          //     icon={coin.icon}
          //     price={coin.price}
          //     symbol={coin.symbol}
          //     id={coin.id}
          //     getCoinById={getCoinById}
          //   />
          // );
        ))}
      </div>

    </div>
  );
}

export default List;
