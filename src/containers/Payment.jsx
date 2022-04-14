import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useToast } from '@chakra-ui/react';
import env from '../env';
import AppContext from '../context/AppContext';

import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const history = useHistory();
  const { cart, buyer } = state;
  const toast = useToast();

  const paypalOptions = {
    clientId: env.paypalClientId,
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const finalPrice = cart.reduce((price, item) => price + item.price, 0);

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
      toast({
        title: `You're te best`,
        description:
          'we already process your payment. We will notice you when you package is on the road.',
        status: 'success',
        duration: 6000,
        isClosable: true,
      });
    }
  };

  const handleCancel = (data) => {
    toast({
      title: 'Not sure yet?.',
      description:
        "Not sure about your purchase yet? dont worry we will save your cart for when you're ready.",
      status: 'info',
      duration: 6000,
      isClosable: true,
    });
  };

  const handleError = (error) => {
    toast({
      title: 'Oops! something went wrong',
      description: 'we couldnt process the payment, dont worry we will fix it',
      status: 'error',
      duration: 6000,
    });
    console.log(error);
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={finalPrice}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => handleError(error)}
            onPaymentCancel={(data) => handleCancel(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
