import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Coin() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    console.log(id);
    Axios.get(`https://api.coinstats.app/public/v1/coins/${id}`).then(
      (response) => {
        console.log(response.data);
        setCoin(response.data.coin);
       
      }
    );
  }, []);

  if (coin) {
    return (
      <div className='coinView'>
        <div className='coinCardDetails'>
          {' '}
          <h1> Name: {coin.name} </h1>
          <img src={coin.icon} />
          <h3> Price: {coin.price.toFixed(2)}</h3>
          <h3> Symbol: {coin.symbol}</h3>
          <h3> Volume: {coin.volume}</h3>
          <h3> Available Supply: {coin.availableSupply}</h3>
          <h3> Total Supply: {coin.totalSupply}</h3>
          <h3> Popularity: {coin.rank}</h3>
          
          <h3>Price Change In Last Hour:</h3>
          {coin.priceChange1h < 0 ? (
              <h3 className='redPrice'>{coin.priceChange1h.toFixed(2)}</h3>
          ) : (
              <h3 className='greenPrice'>{coin.priceChange1h.toFixed(2)}</h3>
          )
          }
          

        </div>
      </div>
    );
  } else {
    return <div> loading... </div>;
  }
}

export default Coin;
