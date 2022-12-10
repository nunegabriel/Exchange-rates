import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Detail = () => {
  const coinsState = useSelector((state) => state.cryptoCoin);
  const cryptoCoin = coinsState.filter((coin) => (coin.show === true));
  return (
    <>
      <Link to="/">
        <p className="exit-div">
          <i
            className="Exit"
            role="button"
            label="next"
            tabIndex={0}
          />
        </p>
        <div><h1 className="logo">CoinX</h1></div>
      </Link>
      <table>

        <div className="crypto-div">
          {cryptoCoin.map((coin) => (
            <tr key={coin.baseSymbol} className="cypto-row">
              <td>
                Coin name:
                &nbsp; &nbsp;&nbsp;
                {coin.baseId}
              </td>
              <td>
                Rank:
                &nbsp; &nbsp;&nbsp;
                {coin.rank}
              </td>
              <td>
                Base Symbol:
                &nbsp;  &nbsp;&nbsp;
                {coin.baseSymbol}
              </td>
              <td className="Price">
                Price:
                &nbsp;  &nbsp;
                {coin.priceUsd}
              </td>

              <td>
                Percent Exchange Volume:
                &nbsp;&nbsp;
                {coin.percentExchangeVolume}
              </td>

              <td>
                Currency:
                &nbsp; &nbsp;
                {coin.quoteSymbol}
              </td>
            </tr>
          ))}
        </div>
      </table>
    </>
  );
};

export default Detail;
