import React, { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/header/header.component';
import SuspenseComponent from './components/suspense/suspense.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={SuspenseComponent(HomePage)} />
        <Route path="shop/*" element={SuspenseComponent(ShopPage)} />
        <Route path="checkout" element={SuspenseComponent(CheckoutPage)} />
        <Routes
          path="signIn"
          element={
            currentUser ? (
              <Navigate replace to="/" />
            ) : (
              SuspenseComponent(SignInAndSignUpPage)
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
