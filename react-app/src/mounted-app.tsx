/* eslint-disable import/no-extraneous-dependencies */
import ReactDOM from 'react-dom/client';
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';

import Details from './pages/details';
import Home from './pages/home';

const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <BrowserRouter basename="test">
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Switch>
    </BrowserRouter>,
  );
};

export const moduleFederation = {
  mount,
  type: 'react',
};
