/* eslint-disable import/no-extraneous-dependencies */
import { Routes as Switch, Route } from 'react-router-dom';

import Details from '@pages/details';
import Home from '@pages/home';

function App() {
  return (
    <Switch>
      <Route path="/test" element={<Home />} />
      <Route path="/test/details" element={<Details />} />
    </Switch>
  );
}

export default App;
