import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Buttonpay = ({ price }) => {
  const pricetotal = price * 100;
  const Pkey = "pk_test_8Ws9hwK6iSAhszxsRlbXt1aR00rDYNDWef";

  const onToken = () => {
    alert("payment succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="e-commerce"
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      shippingAddress
      billingAddress
      description={`your total is $${price}`}
      stripeKey={Pkey}
      amount={pricetotal}
      token={onToken}
    />
  );
};

export default Buttonpay;
