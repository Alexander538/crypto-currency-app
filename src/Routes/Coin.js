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
              console.log(coin)
          }
      );
  }, []);

  if (coin) {
      return <div> yo {coin.name} </div>
  } else {
      return <div> loading... </div>
  }
}

export default Coin;
