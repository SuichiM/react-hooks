import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormLabel, FormControl, Switch } from '@chakra-ui/react';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';
import FormWithRef from '../components/FormWithRef';
import FormWithUseForm from '../components/FormWithUseForm';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const history = useHistory();
  const { cart } = state;
  const [customForm, setCustomForm] = useState(false);

  const handleSubmit = (data) => {
    addToBuyer(data);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            form with useForm
          </FormLabel>
          <Switch
            id="email-alerts"
            onChange={() => setCustomForm(!customForm)}
            value={customForm}
          />
          <FormLabel htmlFor="email-alerts" mb="0">
            custom form
          </FormLabel>
        </FormControl>
        {customForm ? (
          <FormWithRef onSubmit={handleSubmit} />
        ) : (
          <FormWithUseForm onSubmit={handleSubmit} />
        )}
      </div>

      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(({ title, price }) => (
          <div className="Information-item" key={`${title}_${price}`}>
            <div className="Information-element">
              <h4>{title}</h4>
              <span>$ {price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
