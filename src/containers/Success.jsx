import React, { useContext, useState } from 'react';
import { FormLabel, FormControl, Switch } from '@chakra-ui/react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import GMap from '../components/GMap';
import LeafMap from '../components/LeafMap';

const Success = () => {
  const { state } = useContext(AppContext);
  const [Gmap, setGmap] = useState(true);

  const { buyer } = state;
  const leafPosition = [19.4267261, -99.1718796];
  const gmapPosition = { lat: 19.4267261, lng: -99.1718796 };

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Gmap
          </FormLabel>
          <Switch
            id="email-alerts"
            onChange={() => setGmap(!Gmap)}
            value={Gmap}
          />
          <FormLabel htmlFor="email-alerts" mb="0">
            Leaf map
          </FormLabel>
        </FormControl>
        <div className="Success-map">
          {Gmap ? (
            <GMap position={gmapPosition} />
          ) : (
            <LeafMap position={leafPosition} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;
