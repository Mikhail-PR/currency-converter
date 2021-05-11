import { Route } from 'react-router-dom';

import { Home, Converter } from './pages';

const App: React.FC = () => {
  return (
    <>
      <Route path={process.env.PUBLIC_URL + '/'} render={() => <Home />} exact />
      <Route path={process.env.PUBLIC_URL + '/converter'} render={() => <Converter />} exact />
    </>
  );
}

export default App;