import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Jpqq7FNKGIDsOp9MUsVVZ2sex2iwTOAect0PqAMTGvtK3Cjjxpae3F8ZvLwM1w2olEF81oouOjhwjFbcrnnSJcE00a0XpTTjj';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
