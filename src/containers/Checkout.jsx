import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (item) => removeFromCart(item);

  const finalPrice = cart.reduce((price, item) => price + item.price, 0);
  const EMPTY_CART = cart.length === 0;

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {EMPTY_CART ? <h3>No hay productos ;(</h3> : <h3>Lista de Pedidos:</h3>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>

      {!EMPTY_CART && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${finalPrice}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
