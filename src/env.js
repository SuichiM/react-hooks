const config = {
  isProduction: process.env.NODE_ENV === 'production',
  paypalClientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
};

export default config;
