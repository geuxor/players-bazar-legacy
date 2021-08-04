import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { PlayersProvider } from './context/playersContext';
import { FilterProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <PlayersProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </PlayersProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);