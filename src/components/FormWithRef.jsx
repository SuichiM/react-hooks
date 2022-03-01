import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const FormWithRef = ({ onSubmit }) => {
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    onSubmit(buyer);
  };

  return (
    <div className="Information-content">
      <div className="Information-head">
        <h2>Informacion de contacto:</h2>
      </div>
      <div className="Information-form">
        <form ref={form}>
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo Electronico" name="email" />
          <input type="text" placeholder="Direccion" name="address" />
          <input type="text" placeholder="Apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Codigo postal" name="cp" />
          <input type="text" placeholder="Telefono" name="phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Information-back">
          <Link to="/checkout">Regresar</Link>
        </div>
        <div className="Information-next">
          <button type="button" onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormWithRef;
