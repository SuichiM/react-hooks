const config = {
  isProduction: process.env.NODE_ENV === 'production',
  paypalClientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
  googleApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  positionStackApiKey: process.env.REACT_APP_POSITION_STACK_API_KEY,
  PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL,
};

export default config;
