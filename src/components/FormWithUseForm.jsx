/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormControl, Input, FormErrorMessage, Select } from '@chakra-ui/react';

export default function FormWithUseForm({ onSubmit }) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { title: 'Mrs' },
  });
  const { errors } = formState;
  return (
    <div className="Information-content">
      <div className="Information-head">
        <h2>Informacion de contacto:</h2>
      </div>
      <div className="Information-form">
        <form>
          <FormControl mt={2} isInvalid={errors?.title}>
            <Select
              placeholder="Select option"
              {...register('title', { required: 'choose a title' })}
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </Select>
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.name}>
            <Input
              placeholder="Name"
              {...register('name', {
                required: 'This field is required',
                maxLength: 80,
              })}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.email}>
            <Input
              placeholder="Email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            <FormErrorMessage>{errors.enail?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.address}>
            <Input
              placeholder="Address"
              {...register('address', {
                required: 'This field is required',
                maxLength: 100,
              })}
            />
            <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.apto}>
            <Input
              placeholder="Apto"
              {...register('apto', {
                required: 'This field is required',
                maxLength: 12,
              })}
            />
            <FormErrorMessage>{errors.apto?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.city}>
            <Input
              placeholder="City"
              {...register('city', { required: 'This field is required' })}
            />
            <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
          </FormControl>
          <FormControl mt={2} isInvalid={errors?.cp}>
            <Input
              placeholder="CP"
              {...register('cp', { required: 'This field is required' })}
            />
            <FormErrorMessage>{errors.cp?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.state}>
            <Input
              placeholder="State"
              {...register('state', { required: 'This field is required' })}
            />
            <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.country}>
            <Input
              placeholder="Country"
              {...register('country', { required: 'This field is required' })}
            />
            <FormErrorMessage>{errors.country?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={2} isInvalid={errors?.phone}>
            <Input
              type="tel"
              placeholder="Mobile number"
              {...register('phone', {
                required: 'this field is required',
                minLength: 6,
                maxLength: 12,
              })}
            />
            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>
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
