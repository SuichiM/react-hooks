import React, { useContext, useState } from 'react';
import { FormLabel, FormControl, Switch } from '@chakra-ui/react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import GMap from '../components/GMap';
import LeafMap from '../components/LeafMap';
import useLocateAdress from '../hooks/useLocateAdress';

const Success = () => {
  const { state } = useContext(AppContext);
  const [Gmap, setGmap] = useState(true);

  const { buyer } = state;

  const {
    address = '',
    apto = '',
    city = '',
    state: province = '',
    country = '',
  } = buyer;

  const { latitude = -27.91421, longitude = -55.75355 } = useLocateAdress(
    `${address} ${apto} ${city} ${province} ${country}`
  );

  const leafPosition = [latitude, longitude];
  const gmapPosition = { lat: latitude, lng: longitude };

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Your purchase will arrive to the address soon:</span>
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
