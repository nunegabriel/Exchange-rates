import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { coinDetail, fetchCoin } from '../redux/coin/home';

const Coin = () => {
  const coinState = useSelector((state) => state.cryptoCoin);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCoin());
  }, [dispatch]);

  return (
    <div>
      <h1 className="logo">
        coinX
      </h1>
      <form className="input-bar" onChange={(e) => setSearch(e.target.value)}>
        <input placeholder="PLEASE ENTER COIN SYMBOL" />
      </form>
      <table>
        <div className="crypto-coins">
          {/* {coinState.map((coin) => ( */}
          {coinState
            .filter((coin) => (search.toLowerCase() === ''
              ? coin
              : coin.baseSymbol.toLowerCase().includes(search)))
            .map((coin) => (

              <tr key={uuidv4()} className={coin.baseId}>
                <td>
                  <Link to={`/detail/${coin.baseSymbol}`}>
                    <p>
                      {' '}
                      <i
                        aria-hidden="true"
                        className="arrow"
                        role="button"
                        label="next"
                        tabIndex={0}
                        onClick={() => dispatch(coinDetail(coin.baseSymbol))}
                      />
                    </p>
                  </Link>
                </td>
                <td>
                  {coin.baseSymbol}
                </td>
                <td className="value">
                  {coin.priceUsd}
                </td>
              </tr>
            ))}
        </div>
      </table>
    </div>
  );
};

export default Coin;
