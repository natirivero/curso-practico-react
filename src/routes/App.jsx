import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.scss';

/**
 * Deploy a github pages
 * https://platzi.com/tutoriales/2484-react-practico/12068-desplegar-una-app-de-react-junto-con-otros-projectos-en-github-pages/
 */
const App = () => {
  const initialState =
    useInitialState(); /* Funcion que retorna state y addToCart */
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename="curso-practico-react/">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/password-recovery"
              element={<PasswordRecovery />}
            />
            <Route path="/send-email" exact element={<SendEmail />} />
            <Route path="/new-password" exact element={<NewPassword />} />
            <Route path="/account" exact element={<MyAccount />} />
            <Route path="/signup" exact element={<CreateAccount />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/orders" exact element={<Orders />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
