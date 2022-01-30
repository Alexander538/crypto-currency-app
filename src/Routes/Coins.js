import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Coin from './Coin';

function Coins({ name, icon, price, symbol, id, getCoinById }) {
  // const navigate = useNavigate();
 



  return (
    <>
      <div className='coinCard'>
        <h1> Name: {name} </h1>
        <img src={icon} />
        <h3> Price: {price}</h3>
        <h3> Symbol: {symbol}</h3>
        {/* <button
        onClick={() => {
          navigate(`/coin/${id}`);
        }}
      >navigate</button> */}
        <Link to={`/coin/${id}`} key={id} state={id}>
          more info on {name}
        </Link>
      </div>
    </>
  );
}

export default Coins;
