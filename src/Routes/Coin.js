import React from 'react';
import { useSearchParams } from 'react-router-dom';

const users = ['john', 'alice', 'alex', 'tim', 'bob'];

function Coin() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('name') || '';

  const handleSearch = event => {
    const name = event.target.value;

    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h1>Users</h1>
      <input type='text' value={searchTerm} onChange={handleSearch} />
      <ul>
        {users
          .filter((user) =>
            user.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user, i) => (
            <li key={i}>{user}</li>
          ))}
      </ul>
    </>
  );
}

export default Coin;
