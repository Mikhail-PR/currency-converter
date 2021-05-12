import { Header, ExchangeRates, ExchangeHistory } from '../components';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ExchangeRates />
      <ExchangeHistory />
    </>
  );
}

export default Home;