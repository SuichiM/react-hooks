/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const InputGroup = ({ children, isError, errorMessage }) => (
  <div className={`input-group ${isError ? 'invalid' : 'valid'}`}>
    {children}
    <span />
    {isError && (
      <div style={{ flexBasis: '100%', height: '0' }}>
        <small>{errorMessage}</small>
      </div>
    )}
  </div>
);
export default function FormWithUseForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="Information-content">
      <div className="Information-head">
        <h2>Informacion de contacto:</h2>
      </div>
      <div className="Information-form">
        <form>
          <InputGroup
            isError={errors.title}
            errorMessage={errors.title?.message}
          >
            <select {...register('title', { required: true })}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </InputGroup>
          <InputGroup isError={errors.name} errorMessage={errors.name?.message}>
            <input
              type="text"
              placeholder="name"
              {...register('name', {
                required: 'This field is required',
                maxLength: 80,
              })}
            />
          </InputGroup>
          <InputGroup
            isError={errors.email}
            errorMessage={errors.email?.message}
          >
            <input
              type="text"
              placeholder="Email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </InputGroup>

          <input
            type="text"
            placeholder="address"
            {...register('address', { maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="apto"
            {...register('apto', { maxLength: 12 })}
          />
          <input type="text" placeholder="city" {...register('city', {})} />
          <input
            type="text"
            placeholder="country"
            {...register('country', {})}
          />
          <input type="text" placeholder="state" {...register('state', {})} />
          <input type="text" placeholder="cp" {...register('cp', {})} />
          <InputGroup
            isError={errors.phone}
            errorMessage={errors.phone?.message}
          >
            <input
              type="tel"
              placeholder="Mobile number"
              {...register('phone', {
                required: 'this field is required',
                minLength: 6,
                maxLength: 12,
              })}
            />
          </InputGroup>
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Information-back">
          <Link to="/checkout">Regresar</Link>
        </div>
        <div className="Information-next">
          <button type="button" onClick={handleSubmit(onSubmit)}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
