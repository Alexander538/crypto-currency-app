import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import '../App.css';

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
        <TextField
          sx={{
            width: '50%',
            padding: 0,
            margin: 0,
            '& .MuiFilledInput-input': { backgroundColor: 'white' },
          }}
          id='outlined-basic'
          label='Search Crypto...'
          variant='filled'
          onChange={searchHandler}
          value={searchTerm}
        />
        {/* <button onClick={reloadData}>REFRESH</button> */}
      </div>
      <div className='coinView'>
        {isLoading && <h1 className='loadingMsg'>Loading...</h1>}
        {filterCoins.map((coin, i) => (
          <Card
            className='coinCard'
            sx={{ background: 'rgba(57, 55, 121, 0.906)' }}
          >
            <CardActionArea component={RouterLink} to={`/coin/${coin.id}`}>
              <CardContent>
                <CardMedia>
                  <img src={coin.icon} />
                </CardMedia>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='white'
                >
                  {' '}
                  {coin.name}
                </Typography>
                <Typography variant='h6' color='white'>
                  {' '}
                  Price: $ {coin.price.toFixed(2)}
                </Typography>
                <Typography variant='h6' color='white'>
                  {' '}
                  Symbol: {coin.symbol}
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
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default List;
