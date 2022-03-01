import React, { useContext } from 'react';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';
import FormWithRef from '../components/FormWithRef';
import FormWithUseForm from '../components/FormWithUseForm';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;

  const handleSubmit = (data) => {
    addToBuyer(data);
  };

  return (
    <div className="Information">
      {/* <input type="checkbox" /> */}
      {/* <FormWithRef onSubmit={handleSubmit} /> */}
      <FormWithUseForm onSubmit={handleSubmit} />
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
