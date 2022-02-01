import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';

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
      <div className='box'>
        <div className='coinView'>
          <Card className='coinCardDetails'>
            <CardContent>
              <CardMedia>
                <img src={coin.icon} />
              </CardMedia>
              <Typography
                variant='h4'
                gutterBottom
                component='div'
                color='primary'
              >
                {coin.name}
              </Typography>

              <Typography variant='h6' color='primary'>
                {' '}
                Price: {coin.price.toFixed(2)}
              </Typography>
              <Typography variant='h6' color='primary'>
                {' '}
                Symbol: {coin.symbol}
              </Typography>
              <Typography variant='h6' color='primary'>
                {' '}
                Volume: {coin.volume}
              </Typography>
              <Typography variant='h6' color='primary'>
                {' '}
                Available Supply: {coin.availableSupply}
              </Typography>
              <Typography variant='h6' color='primary'>
                {' '}
                Total Supply: {coin.totalSupply}
              </Typography>
              <Typography variant='h6' color='primary'>
                {' '}
                Popularity: {coin.rank}
              </Typography>

              <Typography variant='h6' color='primary'>
                Price Change In Last Hour:
              </Typography>
              {coin.priceChange1h < 0 ? (
                <Typography variant='h6' className='redPrice'>
                  <ArrowDownwardIcon />
                  {coin.priceChange1h.toFixed(2)}
                </Typography>
              ) : (
                <Typography variant='h6' className='greenPrice'>
                  <ArrowUpwardIcon />
                  {coin.priceChange1h.toFixed(2)}
                </Typography>
              )}
              <Button
                sx={{ backgroundColor: 'primary', color: 'gold' }}
                variant='contained'
                startIcon={<UndoIcon />}
                component={RouterLink}
                to={`/`}
              >
                All Coins
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  } else {
    return <div> loading... </div>;
  }
}

export default Coin;
